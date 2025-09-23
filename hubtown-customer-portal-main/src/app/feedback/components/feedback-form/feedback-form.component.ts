import { Component, EventEmitter, inject, OnInit, Output, output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FeedbackService } from '../../feedback.service';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { ToastService } from 'src/app/shared/components/toast.service';
import { ToastComponent } from '../../../shared/components/toast.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastComponent], // Include CommonModule here
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css'],
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm!: FormGroup;
  buildingName: any[] = [];
  feedbackInfo: any[] = [];
  submitted = false;
  isLoading = false;
  isSuccess = false;
  modalMessage = false;
  isBuildingDropdown = false;
  isInfoDropdown = false;
  @Output() logout = new EventEmitter<void>();

  toastService = inject(ToastService);
  authService = inject(AuthService);
  timeRemaining: number = 5; // Start from 5 seconds
  timerInterval: any;

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.initForm();
    this.preFillForm();
    this.getFeedbackInfo();

    if (this.buildingName.length > 0) {
      this.feedbackForm.patchValue({
        unitNo: this.buildingName[0]?.booking?.unit,
        crmPerson: this.buildingName[0]?.booking?.rmName
      });
    }
    // this.getListOfFeedback();
  }

  // handleNavigation() {
  //   if (this.isSuccess === true) {
  //     this.startTimer();
  //   }
  // }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        clearInterval(this.timerInterval);
        this.authService.logout();
        this.router.navigate(['auth']);
      }
    }, 1000); // Update every second
  }

  // Initialize the Reactive Form
  initForm() {
    this.feedbackForm = this.fb.group({
      name: [{ value: '', disabled: true }, Validators.required],
      selectedProject: [{value: '',disabled: true}, Validators.required],
      unitNo: [{ value: '', disabled: true }, Validators.required],
      crmPerson: [{ value: '', disabled: false }, Validators.required],
      informationRequired: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // handle for get feedback list
  getListOfFeedback() {
    const formData = this.feedbackForm.getRawValue();

    const payload = {
      buildingName: formData?.selectedProject,
      unitNo: formData?.unitNo,
      customerName: formData?.name,
    };

    this.feedbackService.getFeedbackList(payload).subscribe({
      next: (response) => {
        console.log({ response });
        if (response?.Success) {
          // this.isSuccess = true;
          // this.handleNavigation();
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // handle unit data onChange of building
  onBuildingSelectionChange(event: Event) {
    const selectedBuilding = (event.target as HTMLSelectElement).value;
    console.log({ selectedBuilding });
    const matchedBuilding = this.buildingName.find(
      (building) => building?.booking?.building === selectedBuilding
    );

    if (matchedBuilding) {
      console.log({ matchedBuilding });
      this.feedbackForm.patchValue({
        unitNo: matchedBuilding?.booking?.unit,
      });
    } else {
      this.feedbackForm.patchValue({
        unitNo: '',
      });
    }
  }

  // handle for prefilled form data
  preFillForm() {
    const userDataString = localStorage.getItem('userInfo');
    const projectDataString = localStorage.getItem('userProjects');
    const currentProject = localStorage.getItem('userSelectedProject');

    if (userDataString) {
      try {
        const parsedUserData = JSON.parse(userDataString);
        this.feedbackForm.patchValue({
          name: parsedUserData.name || '',
          message: parsedUserData.message || '',
        });
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }

    if (projectDataString) {
      
      try {
        // const parsedProjectData = JSON.parse(projectDataString);
        const parsedProjectData = [JSON.parse(currentProject!)]

        if (Array.isArray(parsedProjectData) && parsedProjectData.length > 0) {
          this.buildingName = parsedProjectData;
          this.feedbackForm.patchValue({
            selectedProject: parsedProjectData[0]?.booking?.building || '',
          });
        } else {
          console.warn('No valid project data found');
        }
      } catch (error) {
        console.error('Error parsing project data:', error);
      }
    }
  }

  // Handle Form Submission of feedback form
  handleSubmit() {
    console.log(this.feedbackForm.valid)
    if (this.feedbackForm.valid) {
      this.isLoading = true;
      const formData = this.feedbackForm.getRawValue();
      console.log({ formData });

      const payload = {
        buildingName: formData?.selectedProject,
        unitNo: formData?.unitNo,
        infId: formData?.informationRequired,
        customerName: formData?.name,
        comments: formData?.message,
        Source: 'F'
      };
      console.log({payload});

      this.feedbackService.submitFeedback(payload).subscribe({
        next: (response) => {          
          this.isLoading = false;
          // this.isSuccess = true;
          this.feedbackForm.patchValue({ name: formData.name });
          // this.handleNavigation();
          if (response?.Success === true) {
            this.toastService.triggerToast(
              'Success',
              // response?.Message || 'Feedback submitted successfully',
              'Feedback submitted successfully',
              'success'
            );
            setTimeout(() => {
              this.goBack()
            }, 1000);
          } else {
            this.toastService.triggerToast(
              'Error',
              response?.Message || 'An error occurred. Please try again.',
              'error'
            );
          }
        },
        error: (error) => {
          this.isLoading = false;
          // this.isSuccess = false;
          this.toastService.triggerToast(
            'Error',
            'Failed to submit feedback. Please try again.',
            'error'
          );
          console.error('Error saving data', error);
        },
      });
    } else {
      console.log('Form is invalid:', this.feedbackForm.errors);
      this.feedbackForm.markAllAsTouched(); // Highlight invalid fields
    }
  }

  // handle for get information data
  getFeedbackInfo() {
    this.feedbackService.feedbackInformation().subscribe({
      next: (response) => {
        console.log({ response });
        this.feedbackInfo = response?.Data || []; // Ensure it is initialized
        if (this.feedbackInfo.length > 0) {
          this.feedbackForm.patchValue({
            informationRequired: this.feedbackInfo[0]?.infId,
          });
        }
      },
      error: (error) => {
        console.log('Error fetching feedback info:', error);
      },
    });
  }

  // toggle for dropdown icon handle
  toggleDropdown(dropdown: string) {
    if (dropdown === 'building') {
      this.isBuildingDropdown = !this.isBuildingDropdown;
    } else if (dropdown === 'info') {
      this.isInfoDropdown = !this.isInfoDropdown;
    }
  }

  closeDropdown(dropdown: string) {
    if (dropdown === 'building') {
      this.isBuildingDropdown = false;
    } else if (dropdown === 'info') {
      this.isInfoDropdown = false;
    }
  }

  onLogoutClick() {
    this.logout.emit();
  }

  goBack(): void {
    this.location.back();
  }

}
