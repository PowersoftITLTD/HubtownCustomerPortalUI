import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import { DataState } from '../features/dashboard/state/project-details.state';
import { AuthState } from './storeNgxs/auth.state';
import { SigninComponent } from './signin/signin.component';
import { LoginFormComponent } from './signin/components/login-form/login-form.component';
import { OtpFormComponent } from './signin/components/otp-form/otp-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';
import { ToastComponent } from '../shared/components/toast.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
// import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminLoginFormComponent } from './admin-signin/components/admin-login-form/admin-login-form.component';
import { UserSelectionFormComponent } from './admin-signin/components/user-selection-form/user-selection-form.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent, //() => import('./signin/signin.component').then(m => m.SigninComponent),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'admin',
    component: AdminSigninComponent, //() => import('./signin/signin.component').then(m => m.SigninComponent),
    canActivate: [NoAuthGuard],
  },
];

@NgModule({
  declarations: [
    SigninComponent,
    LoginFormComponent,
    OtpFormComponent,
    AdminSigninComponent,
    // AdminLoginComponent,
    AdminLoginFormComponent,
    UserSelectionFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ToastComponent,
    ReactiveFormsModule
  ],
  exports: [LoginFormComponent, OtpFormComponent],
  providers: [
    provideClientHydration(),
    provideStore(
      [AuthState],
      withNgxsStoragePlugin({
        keys: ['auth.token'],
      })
    ),
    ToastComponent,
  ],
})
export class AuthModule {}
