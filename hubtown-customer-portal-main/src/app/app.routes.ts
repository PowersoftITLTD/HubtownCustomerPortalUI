import { Route } from '@angular/router';
import { AuthGuard } from './auth';
import { NoAuthGuard } from './auth/guards';
// import { AuthGuard, NoAuthGuard } from './auth/guards';
// import { SigninComponent } from './auth/signin/signin.component';
// import { DashboardComponent } from './features/dashboard/dashboard.component';
// import { inject } from '@angular/core';

export const appRoutes: Route[] = [
  // {
  //     path: '',
  //     redirectTo: 'signin',
  //     pathMatch: 'full',
  //   },
  //   {
  //     path: 'home',
  //     loadComponent: () => import('./features/home').then(m => m.HomeComponent),
  //   },
  {
    path: 'dashboard',
    // component: DashboardComponent
    canActivate: [AuthGuard],
    // canActivate: [() => import('./auth/guards/auth.guard').then(g => g.AuthGuard)],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
    // canActivate: [() => import('./auth/guards/no-auth.guard').then(g => g.NoAuthGuard)],
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then((m) => m.FeedbackModule),
    // canActivate: [NoAuthGuard],
    // canActivate: [() => import('./auth/guards/no-auth.guard').then(g => g.NoAuthGuard)],
  },
  { path: '**', redirectTo: 'auth' },
];
