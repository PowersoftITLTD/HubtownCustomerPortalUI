import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackLoginComponent } from './components/feedback-login/feedback-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '../auth/guards';
import { AuthGuard } from '../auth';
import { FormsModule } from '@angular/forms';
import { FeedbackOtpComponent } from './components/feedback-otp/feedback-otp.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackComponent } from './feedback.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngxs/store';
import { AuthState } from '../auth/storeNgxs/auth.state';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { ToastComponent } from '../shared/components/toast.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackComponent, //() => import('./signin/signin.component').then(m => m.SigninComponent),
    canActivate: [NoAuthGuard],
  },
  {
    path: ':userId',
    component: FeedbackComponent, //() => import('./signin/signin.component').then(m => m.SigninComponent),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    // FeedbackComponent,
    // FeedbackLoginComponent,
    // FeedbackOtpComponent,
    // FeedbackFormComponent,
  ],

  imports: [
    CommonModule,
    // // FeedbackLoginComponent,
    // ToastComponent,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  // exports: [
  //   FeedbackLoginComponent,
  //   FeedbackOtpComponent,
  //   FeedbackFormComponent,
  // ],
  providers: [
    provideClientHydration(),
    provideStore(
      [AuthState],
      withNgxsStoragePlugin({
        keys: ['auth.token']
      })
    ),
    // ToastComponent
  ],
})
export class FeedbackModule {}
