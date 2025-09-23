import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Unauthorized: Redirecting to login');
        authService.clearToken();
        router.navigate(['/auth']);
      } else if (error.status === 403) {
        console.error("Forbidden: You don't have access to this resource.");
      } else if (error.status === 404) {
        console.error("Not found: The requested resource doesn't exist.");
      } else if (error.status === 500) {
        console.error('Server error: Please try again later.');
      } else if (error.status === 400) {
        console.log('User is Invail.');
      } else {
        console.error('An unexpected error occurred:', error.message);
      }
      return throwError(() => new Error(error.message));
    })
  );
};
