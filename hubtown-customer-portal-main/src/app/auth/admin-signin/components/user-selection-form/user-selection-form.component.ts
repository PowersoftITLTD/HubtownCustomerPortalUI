import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ToastService } from 'src/app/shared/components/toast.service';

@Component({
  selector: 'app-user-selection-form',
  templateUrl: './user-selection-form.component.html',
  styleUrl: './user-selection-form.component.css',
})
export class UserSelectionFormComponent {
  userForm: FormGroup;
  isInfoDropdown = false;
  isUserDropdown = false;
  isLoading = false;
  authService = inject(AuthService);
  users: any[] = [];
  _router: Router = inject(Router);
  isDisabledUserSubmitBtn = true;
  toastService = inject(ToastService);
  filteredUsers: any[] = []; // Store filtered users
  mobileNumber = signal<string>('');
  mobileNumberTouched = signal<boolean>(false);

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userSelection: [''],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  ngOnInit() {
    this.getUsersList();

    this.mobileNumberTouched.set(true);
    this.userForm.get('mobileNumber')?.valueChanges.subscribe((value) => {
      this.mobileNumber.set(value);
      
      if (value.toString().length > 9) {
        this.filterTheCurrentUser();
      } else if (value.toString().length < 10) {
        this.filteredUsers = [];
      }
    });
  }

  // Mobile number validation
  mobileNumberError = computed(() => {
    if (!this.mobileNumberTouched()) return null;
    if (!this.mobileNumber()) return 'Mobile number is required';
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(this.mobileNumber())
      ? null
      : 'Enter a valid 10-digit number';
  });

  isFormValid = computed(() => !this.mobileNumberError());

  filterTheCurrentUser() {
    const enteredMobile = this.userForm.get('mobileNumber')?.value;
    if (!enteredMobile) {
      return;
    }

    this.filteredUsers = this.users.filter((user) =>
      user.mobile.includes(enteredMobile)
    );

    // If only one user matches, pre-fill the selection
    if (this.filteredUsers.length === 1) {
      const singleUser = this.filteredUsers[0];
      this.userForm.patchValue({ userSelection: singleUser.userId });
    } else {
      this.userForm.patchValue({ userSelection: '' });
    }
  }

  toggleDropdown(type: string) {
    if (type === 'info') {
      this.isInfoDropdown = !this.isInfoDropdown;
    } else if (type === 'user') {
      this.isUserDropdown = !this.isUserDropdown;
    }
  }

  closeDropdown(type: string) {
    if (type === 'info') {
      this.isInfoDropdown = false;
    } else if (type === 'user') {
      this.isUserDropdown = false;
    }
  }

  showMessage(title: string, message: string, type: string) {
    this.toastService.triggerToast(title, message, type);
  }

  getUsersList() {
    this.authService.getUsersList().subscribe({
      next: (response) => {
        this.users = response?.Data || [];
      },
      error: (error) => {
        console.log('Error fetching user list:', error);
      },
    });
  }

  handleUserSubmitClick() {
    const selectedUserValue = this.userForm.get('userSelection')?.value;

    if (!this.isFormValid()) {
      return;
    }
    if (this.filteredUsers.length === 0) {
      this.showMessage('Error', 'User not found', 'error');
      return
    }

    const isAdmin = localStorage.getItem('isLoginAdmin');
    this.isLoading = true;
    this.authService
      .verifyOtp({
        userID: selectedUserValue,
        enteredOTP: '123456',
        isAdmin: isAdmin === 'true',
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.Success) {
            this.showMessage('Success', 'Admin Login Successfully!', 'success');
            this._router.navigate(['dashboard']);
          } else {
            this.showMessage(
              'Error',
              res.Data.message || 'Admin Login failed',
              'error'
            );
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error:', err);
          this.showMessage('Error', 'Failed to login.', 'error');
        },
      });
  }
}
