import { Component, computed, signal, effect, output } from '@angular/core';
import { GenerateOtpModel } from 'src/app/auth/storeNgxs/model/otp.model';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  // // Signals for form controls
  // email = signal<string>('');
  // mobileNumber = signal<string>('');
  // // Track if the fields have been touched
  // emailTouched = signal<boolean>(false);
  // mobileNumberTouched = signal<boolean>(false);
  // // formData = signal<{ email: string, mobileNumber: string }>({ email: '', mobileNumber: '' });
  formDataChange = output<GenerateOtpModel>();

  // constructor(){
  // }
  //  // Computed signal for validation errors
  //  emailError = computed(() => {
  //   if (!this.emailTouched()) return null; // Show error only if touched
  //   if (!this.email()) return 'Email is required.';
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailPattern.test(this.email())) return 'Invalid email format.';
  //   return null;
  // });

  // mobileNumberError = computed(() => {
  //   if (!this.mobileNumberTouched()) return null; // Show error only if touched
  //   if (!this.mobileNumber()) return 'Mobile number is required.';
  //   const mobilePattern = /^[0-9]{10}$/;
  //   if (!mobilePattern.test(this.mobileNumber())) return 'Mobile number must be 10 digits.';
  //   return null;
  // });

  // // Change handlers
  // onEmailChange(event: Event) {
  //   this.email.set((event.target as HTMLInputElement).value);
  //   this.emailTouched.set(true); // Mark as touched
  //   // this.updateFormData();
  // }

  // onMobileChange(event: Event) {
  //   this.mobileNumber.set((event.target as HTMLInputElement).value);
  //   this.mobileNumberTouched.set(true); // Mark as touched
  //   // this.updateFormData();
  // }
  // isFormValid = computed(() => !this.emailError() && !this.mobileNumberError());

  // // Computed signal to represent the form data
  formData = computed(() => {
    if (this.isFormValid()) {
      return {
        emailId: this.isEmail() ? this.value() : '',
        mobileNumber: this.isMobile() ? this.value() : ''
      };
    }
    return null;
  });

  // handleSendOtpClick() {
  //   if (this.isFormValid()) {
  //    this.formDataChange.emit({
  //       emailID: this.email(),
  //       mobileNumber: this.mobileNumber()
  //     });
  //   }
  // }

  // No need for onSubmit if we are using signals to continuously pass formData

  value = signal<string>('');  // Holds the value of the input field
  isEmailInput = signal<boolean>(true)
  // Function to determine if the input is an email
  isEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.value());
  }

  // Function to detect if input is a valid mobile number
  isMobile(): boolean {
    const mobileRegex = /^[0-9]{10}$/;  // Adjust based on region
    return mobileRegex.test(this.value());
  }

  // Validate input and return error message if invalid
  inputError(): string | null {
    if (this.value() === '') return null;

    // if (this.isEmail()) {
    //   return null;  // No error if it's a valid email
    // }

    // if (this.isMobile()) {
    //   return null;  // No error if it's a valid mobile number
    // }

    // if (this.isEmailInput()) {
    //   return this.isEmail() ? null : 'Please enter a valid email address';
    // }

    return this.isMobile() ? null : 'Please enter a valid mobile number';
  

    // return 'Please enter a valid email or mobile number';
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
    return (this.isEmailInput() && this.isEmail()) || (!this.isEmailInput() && this.isMobile());
  
    // return this.isEmail() || this.isMobile();
  }

  // Handle sending OTP
  handleSendOtpClick() {
    if (this.isFormValid()) {
         this.formDataChange.emit({
          emailID: this.isEmail() ? this.value() : '',
          mobileNumber: this.isMobile() ? this.value() : ''
          });
        }
  }

  handleEnterSubmit(){
    if(this.isFormValid()){
      this.handleSendOtpClick()
    }
  }
}
