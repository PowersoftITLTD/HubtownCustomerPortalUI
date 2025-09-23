import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-upcoming-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-projects.component.html',
  styleUrl: './upcoming-projects.component.css',
})
export class UpcomingProjectsComponent implements OnInit {
  upcomingProjects: any[] = []
  dashboardService = inject(DashboardService)
  upcomingProjetcImages = signal<any[]>([])
  ngOnInit(): void {
    this.getUpcomingProjects()
  }

  getUpcomingProjects() {
    this.dashboardService.getUpcomingProjects().subscribe({
      next: (res) => {
        this.upcomingProjects = res?.Data ?? [];
      }
    })
  }

  handleViewImageClick(_listProjectImages: any[]) {
    this.upcomingProjetcImages.set(_listProjectImages);
  }
  
}
