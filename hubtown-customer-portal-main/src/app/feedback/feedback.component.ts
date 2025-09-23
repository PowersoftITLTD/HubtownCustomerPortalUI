import { Component, effect, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FeedbackLoginComponent } from './components/feedback-login/feedback-login.component';
import { ToastService } from '../shared/components/toast.service';
import { FeedbackOtpComponent } from './components/feedback-otp/feedback-otp.component';
import { FormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { ToastComponent } from '../shared/components/toast.component';
// import { FeedbackOtpComponent } from "./components/feedback-otp/feedback-otp.component";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule,
    FeedbackLoginComponent,
    FeedbackOtpComponent,
    FormsModule,
    FeedbackFormComponent,
    ToastComponent
],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  showOtp = false;
  phoneNumber = '';
  email = '';
  authService = inject(AuthService);
  otp = '';
  _router: Router = inject(Router);
  isLoading = false;
  userId = '';
  feedbackForm = false;

  ngOnInit() {
    const user = localStorage.getItem("userInfo")
    if (user) {
      this.feedbackForm = true
    }
  }

  @ViewChild(FeedbackLoginComponent)
  loginFormComponent!: FeedbackLoginComponent;

  toastService = inject(ToastService);

  constructor() {
    effect(() => {
      const data = this.loginFormComponent?.formData();
      if (data) {
        this.email = data.emailId;
        this.phoneNumber = data.mobileNumber;
      }
    });
  }

  otpChange(_otp: any) {
    this.otp = _otp;
  }

  handleSendOtpClick(event: any) {
    this.email = event.emailID;
    this.phoneNumber = event.mobileNumber;
    this.generateOtp();
  }

  showMessage(title: string, message: string, type: string) {
    this.toastService.triggerToast(title, message, type);
  }

  generateOtp() {
    this.isLoading = true;
    this.authService
      .generateOtp({
        emailID: this.email,
        mobileNumber: this.phoneNumber,
      })
      .subscribe({
        next: (res) => {
          console.log('res', res.Data);
          this.isLoading = false;
          this.showOtp = true;
          this.userId = res?.Data?.userID;
          if (res?.Success) {
            this.showMessage('Success', res.Message, 'success');
          } else {
            this.showMessage('Error', '', 'error');
          }
        },
        error: (err) => {
          console.error('Error:', JSON.stringify(err));
          this.isLoading = false;
          console.error(err);
          const errorMessage = err?.error || 'User is Invalid.';
          this.showMessage('Error', errorMessage, 'error');
        },
      });
  }

  handleLoginClick(otp: string) {
    this.isLoading = true;

    this.authService
      .feedbackVerifyOtp({
        userID: this.userId,
        enteredOTP: otp,
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.Success) {
            if (!res.Data.users && !res.Data.projects.length) {
              this.showMessage('Info', res.Data.message, 'info');
            } else {
              this.showMessage('Success', 'Login successful!', 'success');
              // this._router.navigate(['dashboard']);
              this.feedbackForm = true;
            }
          } else {
            this.showMessage(
              'Error',
              res.Data.message || 'Something went wrong!',
              'error'
            );
            this.feedbackForm = false;
            this.showMessage('Error', res.Data.message, 'error');
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error:', err);
          this.showMessage('Error', 'Failed to verify OTP.', 'error');
        },
      });
  }

  handleLogoutClick() {
    this.feedbackForm = false;
    this.showOtp = false;
  }

}
