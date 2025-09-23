import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { AvatarModule } from 'ngx-avatars';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';

@Component({
  selector: 'app-project-updates',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  templateUrl: './project-updates.component.html',
  styleUrl: './project-updates.component.css',
})
export class ProjectUpdatesComponent implements OnInit {
  projectUpdates: any[] = []
  dashboardService = inject(DashboardService);
  store = inject(Store);
  projectImages = signal<any[]>([])

  ngOnInit(): void {
    this.store.select(AuthState.getSelectedProject).subscribe(e => {
      this.getProjectUpdates(e?.projectId)
    })
  }

  getProjectUpdates(projectId: number) {
    this.dashboardService.getProjectUpdates(projectId).subscribe({
      next: (res) => {
        this.projectUpdates = res?.Data ?? [];
      }
    })
  }

  handleViewImageClick(_projectImages: any[]) {
    this.projectImages.set(_projectImages);
  }
}
