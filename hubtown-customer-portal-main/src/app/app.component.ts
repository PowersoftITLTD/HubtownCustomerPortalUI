import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
// import { CoreModule } from './core/core.module';
// import { NgxsModule } from '@ngxs/store';
// import { DataState } from './pages/dashboard/state/project-details.state';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hubtown-customer-portal';
}
