import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root', // Singleton service
})
export class ToastService {
  // Use signals for title, message, and showToast state
  showToast = signal<boolean>(false);
  title = signal<string>('');
  message = signal<string>('');
  toastType = signal<string>('');

  // Method to trigger the toast
  triggerToast(toasterTitle: string, toasterMessage: string, type: string) {
    this.title.set(toasterTitle);
    this.message.set(toasterMessage);
    this.showToast.set(true);
    this.toastType.set(type);

    // Auto-hide after 2 seconds
    setTimeout(() => this.hideToast(), 2000);
  }

  // Method to hide the toast
  hideToast() {
    this.showToast.set(false);
  }
}
