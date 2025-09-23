import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Lazy-loaded candidate routes
const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then((m) => m.DashboardComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes), ReactiveFormsModule],
})
export class DashboardModule {}
