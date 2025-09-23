import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';// Adjust import as needed
import { InitializeAuth } from './auth/storeNgxs/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {
  constructor(private store: Store) {}

  initializeApp(): () => Promise<void> {
    return () => new Promise((resolve) => {
      this.store.dispatch(new InitializeAuth()).subscribe(() => resolve());
    });
  }
}
