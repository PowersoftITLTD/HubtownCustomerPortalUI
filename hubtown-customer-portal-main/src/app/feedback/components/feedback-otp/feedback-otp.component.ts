import {
  Component,
  Input,
  Output,
  EventEmitter,
  Signal,
  signal,
  output,
  input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-otp.component.html',
  styleUrls: ['./feedback-otp.component.css'],
})
export class FeedbackOtpComponent implements OnInit, OnDestroy {
  otp = signal<string[]>(Array(6).fill(''));
  otpChange = output<string>();
  emailId = input<string>();
  mobileNumber = input<string>();
  showOtp = input<boolean>();
  showOtpChange = output<boolean>();
  resendOtp = output<boolean>();
  @Input() isLoading: boolean = false;

  // Define signals for timer
  minutes = signal<number>(0);
  seconds = signal<number>(34);
  isResendAllowed = signal<boolean>(false);
  private interval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  handleBackClick() {
    this.showOtpChange.emit(false);
  }

  // Method to handle input events
  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Update the OTP array
    this.otp.set([
      ...this.otp().slice(0, index),
      value,
      ...this.otp().slice(index + 1),
    ]);

    // Automatically move focus to the next input
    if (index < 5 && value) {
      (
        document.querySelectorAll('.otp-input')[index + 1] as HTMLInputElement
      ).focus();
    }

    // Validate OTP if all fields are filled
    // if (this.otp().every(digit => digit.length === 1)) {
    //   this.handleOtpSubmit();
    // }
  }
  // Method to handle OTP submission
  handleOtpSubmit() {
    const otpValue: any = this.otp().join('');
    this.otpChange.emit(otpValue);
    // console.log('Entered OTP:', otpValue);
    // Add logic to handle OTP submission, e.g., send to server
  }

  startTimer() {
    this.interval = setInterval(() => {
      const currentSeconds = this.seconds();
      const currentMinutes = this.minutes();

      if (currentSeconds > 0) {
        this.seconds.set(currentSeconds - 1);
      } else {
        if (currentMinutes > 0) {
          this.minutes.set(currentMinutes - 1);
          this.seconds.set(59);
        } else {
          this.clearTimer();
          this.isResendAllowed.set(true); // Show Resend OTP link
        }
      }
    }, 1000);
  }

  clearTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  handleResendOtpClick() {
    // Handle OTP resend logic
    this.resendOtp.emit(true);
    console.log('OTP resent');
    this.otp.set(Array(6).fill(''));
    // Reset timer and hide the resend link
    this.minutes.set(2);
    this.seconds.set(34);
    this.isResendAllowed.set(false);
    this.startTimer(); // Restart timer
  }
}
