import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../../../../feedback/feedback.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastService } from '../../../../shared/components/toast.service';
import { ToastComponent } from 'src/app/shared/components/toast.component';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { BookingState } from '../../state/booking.state';
import { Store } from '@ngxs/store';
import { AvatarModule } from 'ngx-avatars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-query',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastComponent, AvatarModule],
  templateUrl: './ask-query.component.html',
  styleUrl: './ask-query.component.css',
})
export class AskQueryComponent {
  private store = inject(Store);
  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private toastService: ToastService,
    private _router: Router
  
  ) {}

  feedbackInfo: any[] = [];
  queryForm!: FormGroup;
  isInfoDropdown: boolean = false;
  isLoading: boolean = false;
  isSuccess: boolean = false;
  bookings$!: Observable<Booking[]>;

  ngOnInit() {
    this.initForm();
    this.getFeedbackInfo();
    this.bookings$ = this.store.select(BookingState.getBookings);
  }

  //  ngOnInit(): void {

  //     this.user = this.store.selectSnapshot(AuthState.getUser);
  //     this.store.select(AuthState.getSelectedProject).subscribe(e => {

  //       if(e && this.user) {
  //         this.selectedProject = e;

  //       // console.log("selectedProject", this.selectedProject);
  //         // Dispatch the action to fetch booking details
  //       // this.store.dispatch(new FetchBooking(user.userID, this.selectedProject?.projectId)); //commented to read data from local storage
  //       let booking = [this.selectedProject?.booking]
  //       this.store.dispatch(new SetBooking(booking));

  //       this.store.dispatch(new FetchJointOwner(this.user?.userID,this.selectedProject?.projectId));
  //       this.jointOwner$ = this.store.select(BookingState.getJointOwner);

  //       }
  //     });

  //   }

  // Initialize the Reactive Form
  initForm() {
    this.queryForm = this.fb.group({
      informationRequired: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // handle for get information data
  getFeedbackInfo() {
    this.feedbackService.feedbackInformation().subscribe({
      next: (response) => {
        this.feedbackInfo = response?.Data || []; // Ensure it is initialized
      },
      error: (error) => {
        console.log('Error fetching feedback info:', error);
      },
    });
  }

  // handle for prefilled form data
  // preFillForm() {
  //   const userDataString = localStorage.getItem('userInfo');
  //   const projectDataString = localStorage.getItem('userProjects');

  //   if (userDataString) {
  //     try {
  //       const parsedUserData = JSON.parse(userDataString);
  //       this.feedbackForm.patchValue({
  //         name: parsedUserData.name || '',
  //         message: parsedUserData.message || '',
  //       });
  //     } catch (error) {
  //       console.error('Error parsing user data:', error);
  //     }
  //   }

  //   if (projectDataString) {
  //     try {
  //       const parsedProjectData = JSON.parse(projectDataString);
  //       if (Array.isArray(parsedProjectData) && parsedProjectData.length > 0) {
  //         this.buildingName = parsedProjectData;
  //         this.feedbackForm.patchValue({
  //           selectedProject: parsedProjectData[0]?.booking?.building || '',
  //         });
  //       } else {
  //         console.warn('No valid project data found');
  //       }
  //     } catch (error) {
  //       console.error('Error parsing project data:', error);
  //     }
  //   }
  // }

  // Handle Form Submission of feedback form
  handleSubmit() {
    const userDataString: any = localStorage.getItem('userInfo');
    const selectedProjectDataString: any = localStorage.getItem(
      'userSelectedProject'
    );

    if (this.queryForm.valid) {
      this.isLoading = true;
      const formData = this.queryForm.getRawValue();
      const parsedUserData = JSON.parse(userDataString);
      const parsedProjectData = JSON.parse(selectedProjectDataString);
      const payload = {
        buildingName: parsedProjectData?.booking?.building || '',
        unitNo: parsedProjectData?.booking?.unit || '',
        customerName: parsedUserData.name || '',
        infId: formData?.informationRequired || '',
        comments: formData?.message,
        Source: 'C',
      };

      this.feedbackService.submitFeedback(payload).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response?.Success === true) {
            this.queryForm.reset();
            this.isSuccess = true;
            this.toastService.triggerToast(
              'Success',
              response?.Message || 'Query submitted successfully',
              'success'
            );
          } else {
            this.toastService.triggerToast(
              'Error',
              response?.Message || 'An error occurred. Please try again.',
              'error'
            );
          }
        },
        error: (error) => {
          this.queryForm.reset();
          this.isLoading = false;
          this.isSuccess = false;
          this.toastService.triggerToast(
            'Error',
            'Failed to submit Query. Please try again.',
            'error'
          );
          console.error('Error saving data', error);
        },
      });
    } else {
      console.log('Form is invalid:', this.queryForm.errors);
      this.queryForm.markAllAsTouched();
    }
  }

  // toggle for dropdown icon handle
  toggleDropdown(dropdown: string) {
    if (dropdown === 'info') {
      this.isInfoDropdown = !this.isInfoDropdown;
    }
  }

  closeDropdown(dropdown: string) {
    if (dropdown === 'info') {
      this.isInfoDropdown = false;
    }
  }

  handleFeedbackNavigation(){
    this._router.navigate(['feedback/user'])
  }
}
