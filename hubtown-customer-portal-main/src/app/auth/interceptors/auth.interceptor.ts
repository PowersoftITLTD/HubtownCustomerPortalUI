import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from '../storeNgxs/auth.state';
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);
  const token = store.selectSnapshot(AuthState.getToken);
  // console.log('interceptor', token);
  
  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
