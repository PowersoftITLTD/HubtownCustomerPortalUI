import {
  Component,
  computed,
  signal,
  effect,
  output,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateOtpModel } from 'src/app/auth/storeNgxs/model/otp.model';

@Component({
  selector: 'app-feedback-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-login.component.html',
  styleUrl: './feedback-login.component.css',
})
export class FeedbackLoginComponent {
  formDataChange = output<GenerateOtpModel>();
  @Input() isLoading: boolean = false; // Default value

  // // Computed signal to represent the form data
  formData = computed(() => {
    if (this.isFormValid()) {
      return {
        emailId: this.isEmail() ? this.value() : '',
        mobileNumber: this.isMobile() ? this.value() : '',
      };
    }
    return null;
  });

  value = signal<string>(''); // Holds the value of the input field
  isEmailInput = signal<boolean>(true);
  // Function to determine if the input is an email
  isEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.value());
  }

  // Function to detect if input is a valid mobile number
  isMobile(): boolean {
    const mobileRegex = /^[0-9]{10,15}$/; // Adjust based on region
    return mobileRegex.test(this.value());
  }

  // Validate input and return error message if invalid
  inputError(): string | null {
    if (this.value() === '') return null;

    if (this.isEmailInput()) {
      return this.isEmail() ? null : 'Please enter a valid email address';
    }

    return this.isMobile() ? null : 'Please enter a valid mobile number';
  }

  // Handle the input field changes
  onInputChange(event: any) {
    this.value.set(event.target.value);
    // Check if it's an email or mobile and update isEmailInput signal
    if (this.value().includes('@') || /[a-zA-Z]/.test(this.value())) {
      this.isEmailInput.set(true);
    } else {
      this.isEmailInput.set(false);
    }
  }

  // Check if the form is valid (input is either a valid email or mobile number)
  isFormValid(): boolean {
    return (
      (this.isEmailInput() && this.isEmail()) ||
      (!this.isEmailInput() && this.isMobile())
    );

    // return this.isEmail() || this.isMobile();
  }

  onEnterPress(event: any) {
    event.preventDefault();
    this.handleSendOtpClick();
  }

  // Handle sending OTP
  handleSendOtpClick() {
    if (this.isFormValid()) {
      this.formDataChange.emit({
        emailID: this.isEmail() ? this.value() : '',
        mobileNumber: this.isMobile() ? this.value() : '',
      });
    }
  }
}
