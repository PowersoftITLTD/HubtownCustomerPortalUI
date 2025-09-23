import { Component, ViewChild, effect, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/components/toast.service';
import { AdminLoginFormComponent } from './components/admin-login-form/admin-login-form.component';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrl: './admin-signin.component.css',
})
export class AdminSigninComponent {
  showUserDropdown = false;
  email = '';
  password = '';
  authService = inject(AuthService);
  otp = '';
  _router: Router = inject(Router);
  isLoading = false;
  userId = '';

  @ViewChild(AdminLoginFormComponent) AdminLoginFormComponent!: AdminLoginFormComponent;

  toastService = inject(ToastService);

  otpChange(_otp: any) {
    this.otp = _otp;
  }

  handleSendOtpClick(event: any) {
    this.email = event.emailID;
    this.password = event.password;
    this.login();
  }

  showMessage(title: string, message: string, type: string) {
    this.toastService.triggerToast(title, message, type);
  }

  login() {
    this.isLoading = true;
    this.authService
      .adminLogin({
        emailID: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res:any) => {
          this.isLoading = false;
          if (res.Success) {
            this.showUserDropdown = true
            localStorage.setItem("isLoginAdmin", res?.Data?.isAdmin)
            this.showMessage('Success', 'Login successful!', 'success');
            // this._router.navigate(['dashboard']);
          } else {
            this.showMessage('Error', res.Message || 'Login failed', 'error');
          }
        },
        error: (err:any) => {
          this.isLoading = false;
          console.error('Error:', err);
          const errorMessage = err?.error || 'An unexpected error occurred.';
          this.showMessage('Error', errorMessage, 'error');
        },
      });
  }


}
