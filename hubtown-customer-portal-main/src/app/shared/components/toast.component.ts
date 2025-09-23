import { Component } from '@angular/core';
import { ToastService } from '../../shared/components/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="toastService.showToast()"
      class="toast-container position-fixed top-0 end-0 p-3"
    >
      <div
        class="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        [ngClass]="{
          'toast-success': toastService.toastType() === 'success',
          'toast-error': toastService.toastType() === 'error',
        }"
      >
        <!-- <div class="toast-header"> -->
        <!-- <strong class="me-auto">{{ toastService.title() }}</strong> -->

        <!-- </div> -->
        <div class="toast-body">
          {{ toastService.message() }}
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            (click)="toastService.hideToast()"
          ></button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .toast {
        opacity: 0;
        transform: translateY(100%);
        transition: all 0.5s ease-in-out;
      }
      .toast.show {
        opacity: 1;
        transform: translateY(0);
        box-shadow: none;
        transition: all 0.5s ease-in-out;
      }
      .toast-success {
        background-color: #28a745; /* Green */
        color: white;
      }

      // /* Error Toast Styles */
      .toast-error {
        background: #dc3545; /* Red */
        color: white;
      }

      /* Common Toast Styles */
      .toast-header {
        background-color: #343a40;
        color: white;
      }

      .toast-body {
        padding: 10px;
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}
