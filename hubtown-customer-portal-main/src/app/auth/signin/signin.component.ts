import { Component, ViewChild, effect, inject } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/components/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  showOtp = false;
  phoneNumber = '';
  email = '';
  authService = inject(AuthService);
  otp = '';
  _router: Router = inject(Router);
  isLoading = false;
  userId = '';

  // toastService = inject(ToastService);

  @ViewChild(LoginFormComponent) loginFormComponent!: LoginFormComponent;

  constructor() {
    effect(() => {
      const data = this.loginFormComponent?.formData();
      if (data) {
        this.email = data.emailId;
        this.phoneNumber = data.mobileNumber;
      }
    });
  }

  toastService = inject(ToastService);

  otpChange(_otp: any) {
    this.otp = _otp;
  }

  handleSendOtpClick(event: any) {
    this.email = event.emailID;
    this.phoneNumber = event.mobileNumber;
    this.generateOtp();
  }

  showMessage(title: string, message: string , type : string) {
    this.toastService.triggerToast(title, message , type);
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
          console.log("res",res.Data)
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
          console.error("Error:", JSON.stringify(err));
          this.isLoading = false;
          console.error(err);
          const errorMessage = err?.error || "User is Invalid.";
        this.showMessage('Error', errorMessage, 'error');
        },
      });
  }

  handleLoginClick(otp: string) {
    this.isLoading = true;

    this.authService
      .verifyOtp({
        userID: this.userId,
        enteredOTP: otp
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          if (res.Success) {
            if (!res.Data.users && !res.Data?.projects?.length) {
              this.showMessage('Info', res.Data.message , "info");
            } else {
              this.showMessage('Success', 'Login successful!' , "success");
              this._router.navigate(['dashboard']);
            }
          } else {
            this.showMessage(
              'Error',
              res.Data.message || 'Something went wrong!',
              "error"
            );
            // this.toastService.triggerToast('Error', res.Data.message);
          }
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Error:', err);
          this.showMessage('Error', 'Failed to verify OTP.' , "error");
        },
      });
  }


}
