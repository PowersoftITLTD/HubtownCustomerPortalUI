import { Component, computed, signal, output } from '@angular/core';
import { GenerateOtpModel } from 'src/app/auth/storeNgxs/model/otp.model';

@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrl: './admin-login-form.component.css',
})
export class AdminLoginFormComponent {

  formDataChange = output<any>();

  email = signal<string>('');
  password = signal<string>('');
  emailTouched = signal<boolean>(false);
  passwordTouched = signal<boolean>(false);

  // Email validation
  emailError = computed(() => {
    if (!this.emailTouched()) return null;
    if (!this.email()) return 'Email is required';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.email()) ? null : 'Invalid email format';
  });

  // Password validation
  passwordError = computed(() => {
    if (!this.passwordTouched()) return null;
    if (!this.password()) return 'Password is required';
    return this.password().length >= 6 ? null : 'Password must be at least 6 characters';
  });

  isFormValid = computed(() => !this.emailError() && !this.passwordError());

  formData = computed(() => {
    if (this.isFormValid()) {
      return {
        emailId: this.email(),
        password: this.password()
      };
    }
    return null;
  });

  onEmailChange(event: Event) {
    this.email.set((event.target as HTMLInputElement).value);
    this.emailTouched.set(true);
  }

  onPasswordChange(event: Event) {
    this.password.set((event.target as HTMLInputElement).value);
    this.passwordTouched.set(true);
  }

  handleSendOtpClick() {
    if (this.isFormValid()) {
      this.formDataChange.emit({
        emailID: this.email(),
        password: this.password()
      });
    }
  }
}
