import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../storeNgxs/auth.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.store.selectSnapshot(AuthState.isAuthenticated);

    if (!isAuthenticated) {
      this.router.navigate(['/auth']);  // Redirect to login if not authenticated
      return false;
    }

    return true;
  }
}
