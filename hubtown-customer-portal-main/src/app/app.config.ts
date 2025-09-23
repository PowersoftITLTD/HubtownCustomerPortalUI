import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  provideStore } from '@ngxs/store';

// import { provideStore as provideStoreNGRX } from '@ngxs/store';
import { DataState } from './features/dashboard/state/project-details.state';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthState } from './auth/storeNgxs/auth.state';
// import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { authInterceptor } from './auth/interceptors/auth.interceptor';
import { AppInitializerService } from './app.initializer';
import { BookingState } from './features/dashboard/state/booking.state';
import { errorInterceptor } from './auth/interceptors/error.interceptor';
// import { provideEffects } from '@ngrx/effects';
// import { provideRouterStore } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    // provideHttpClient(),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    // NgxsModule.forRoot([AuthState]),  // NGXS Store configuration
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideStore([DataState, AuthState, BookingState]),
    // importProvidersFrom(NgxsModule.forRoot([DataState, AuthState])),
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializerService) => appInitializer.initializeApp(),
      deps: [AppInitializerService],
      multi: true
    }
  ],
};
