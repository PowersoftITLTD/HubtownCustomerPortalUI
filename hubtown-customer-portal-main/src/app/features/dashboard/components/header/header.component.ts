import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';
import { AvatarModule } from 'ngx-avatars';
import { NotificationItem } from '../../models/project-details.model';
import { filter, Observable, switchMap } from 'rxjs';
import { BookingState } from '../../state/booking.state';
import { FetchNotification } from '../../actions/booking.actions';
import { DashboardService } from '../../services/dashboard.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SetToken } from 'src/app/auth/storeNgxs/auth.action';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AvatarModule, ReactiveFormsModule, NgSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  private authService = inject(AuthService);
  private store = inject(Store);
  private dashboardService = inject(DashboardService);

  // ---- state -------------------------------------------------------------
  projects: any[] | null = [];
  selectedProject: any | null = null;
  private lastValidProject: any = null;
  private lastValidUserId: any = null;

  // ✅ prevents getUser subscription from overwriting an in-flight revert
  private isReverting = false;

  user: any = null;
  notification$!: Observable<NotificationItem[]>;
  hasUnreadNotifications = signal<boolean>(true);
  notificationId: number[] = [];

  users: any[] = [];
  userForm: FormGroup;
  selectedUserValue: any;
  isDropdownVisible: any = false;

  projectUpdates: any[] = [];

  // ---- loaders -----------------------------------------------------------
  isUserLoading = signal<boolean>(false);
  isProjectLoading = signal<boolean>(false);

  // ---- ng-select helpers -------------------------------------------------
  searchUser = (term: string, item: any): boolean => {
    const strip = (n: string) =>
      (n || '').replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '').toLowerCase();
    return strip(item?.userName).includes((term || '').toLowerCase());
  };

  trackByUserId = (item: any) => item?.userId;

  compareUsers = (a: any, b: any): boolean => {
    if (a == null || b == null) return a === b;
    return String(a) === String(b);
  };

  userTooltip(item: any): string {
    if (!item) return '';
    return [
      item.userName,
      item.email ? `Email: ${item.email}` : '',
      item.mobile ? `Phone: ${item.mobile}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }

  // ---- users -------------------------------------------------------------
  getUsersList() {
    this.authService.getUsersList().subscribe({
      next: (response) => {
        this.users = (response?.Data || []).sort((a: any, b: any) => {
          const stripTitle = (name: string) =>
            name?.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '').trim();
          return stripTitle(a.userName || '').localeCompare(
            stripTitle(b.userName || '')
          );
        });

        const targetUserId = this.lastValidUserId ?? this.user?.userID;
        if (targetUserId) {
          this.userForm.patchValue(
            { userSelection: targetUserId },
            { emitEvent: false }
          );
        }
      },
      error: (error) => console.log('Error fetching users:', error),
    });
  }

  handleUserSubmitClick() {
    if (this.isUserLoading()) return;

    const selectedId = this.userForm.get('userSelection')?.value;
    console.log('selectedId: ', selectedId);
    if (!selectedId) {
      this.revertToPreviousSelection();
      return;
    }

    this.selectedUserValue = selectedId;
    const isAdmin = localStorage.getItem('isLoginAdmin');

    this.isUserLoading.set(true);

    this.authService
      .verifyOtp({
        userID: this.selectedUserValue,
        enteredOTP: '123456',
        isAdmin: isAdmin === 'true',
      })
      .subscribe({
        next: (res) => {
          // ✅ No token = switch rejected → revert immediately
          if (!res?.Success || !res?.Data?.token) {
            console.warn(
              '[Header] OTP success but no token — switch rejected, reverting'
            );
            this.revertToPreviousSelection();
            return;
          }

          // ✅ Real success — cache + dispatch
          this.selectedUserValue = this.users.find(
            (user: any) => user.userId === this.selectedUserValue
          );


          if (this.selectedUserValue) {
            this.lastValidUserId = this.selectedUserValue.userId;

            this.userForm.patchValue(
              { userSelection: this.lastValidUserId },
              { emitEvent: false }
            );
          }

          this.store.dispatch(new SetToken(res.Data.token));
        },
        error: (err) => {
          console.error('Error:', err);
          this.revertToPreviousSelection();
        },
      })
      .add(() => this.isUserLoading.set(false));
  }
  // ---- project updates ---------------------------------------------------
  getProjectUpdates(projectId: number) {
    if (!projectId) {
      console.warn('[getProjectUpdates] skipped — projectId is undefined');
      this.projectUpdates = [];
      return;
    }

    this.dashboardService.getProjectUpdates(projectId).subscribe({
      next: (res) => {
        this.projectUpdates = res?.Data ?? [];
      },
      error: (err) => {
        console.error('GetProjectUpdates failed:', err);
        this.projectUpdates = [];
        if (err?.status === 400) {
          this.revertToPreviousSelection();
        }
      },
    });
  }

  // ---- revert helper -----------------------------------------------------
  private revertToPreviousSelection() {
    // console.warn('[HeaderComponent] Reverting to previous selection');

    // Pick a target that actually exists in users[] so ng-select shows a name
    let prevUserId = this.lastValidUserId ?? this.user?.userID;

    const exists = prevUserId
      ? this.users.some((u) => String(u.userId) === String(prevUserId))
      : false;

    if (!exists) {
      // The stored user isn't in the loaded list — fall back to the first user
      prevUserId = this.users?.[0]?.userId ?? null;
    }

    if (prevUserId) {
      this.isReverting = true;
      this.userForm.patchValue(
        { userSelection: prevUserId },
        { emitEvent: false }
      );
      this.lastValidUserId = prevUserId;
    }

    const prevProject = this.lastValidProject ?? this.selectedProject ?? null;
    if (prevProject) {
      this.selectedProject = prevProject;
      this.authService.storeSelectedProject(prevProject);
      alert(`User details are not available`)
    }

    this.isUserLoading.set(false);
    this.isProjectLoading.set(false);

    setTimeout(() => (this.isReverting = false), 0);
  }

  // ---- notifications -----------------------------------------------------
  markNotificationsAsRead() {
    this.notificationId.forEach((_notificationId) => {
      this.dashboardService.markNotificationAsRead(_notificationId).subscribe();
    });
    this.hasUnreadNotifications.set(false);
  }

  // ---- lifecycle ---------------------------------------------------------
  ngOnInit(): void {
    this.getUsersList();
    this.projects = this.store.selectSnapshot(AuthState.getProjects);

    // ---- current user ----
    this.store.select(AuthState.getUser).subscribe((user: any) => {
      this.user = user;

      const data: any = localStorage.getItem('isLoginAdmin');
      this.isDropdownVisible = data;

      // ✅ don't clobber the revert
      if (this.isReverting) return;

      if (!this.lastValidUserId && user?.userID) {
        this.lastValidUserId = user.userID;
      }

      if (this.users.length) {
        this.userForm.patchValue(
          { userSelection: this.lastValidUserId ?? this.user.userID },
          { emitEvent: false }
        );
      }
    });

    // ---- selected project → fetch updates ----
    this.store.select(AuthState.getSelectedProject).subscribe((project) => {
      if (!project) return;

      this.selectedProject = project;

      const projectId = project?.projectId;   // ✅ top-level, lowercase d

      if (projectId) {
        this.lastValidProject = project;
        this.getProjectUpdates(projectId);
      } else {
        console.warn('[Header] selectedProject has no projectId — clearing stale data');
        this.projectUpdates = [];
      }
    });

    // ---- bookings → notifications ----
    this.store
      .select(BookingState.getBookings)
      .pipe(
        filter((booking) => !!booking?.[0]?.bookingID),
        switchMap((booking) => {
          this.store.dispatch(new FetchNotification(booking[0].bookingID));
          return this.store.select(BookingState.getnotification);
        })
      )
      .subscribe((items: NotificationItem[]) => {
        this.notificationId = (items || []).map((n) => n.notificationID);
        this.hasUnreadNotifications.set(
          (items || []).some((n: any) => !n.isRead)
        );
      });

    this.notification$ = this.store.select(BookingState.getnotification);
  }

  // ---- actions -----------------------------------------------------------
  handleLogoutClick() {
    this.authService.logout();
  }

  onProjectChange(project: any) {
    if (!project) {
      this.revertToPreviousSelection();
      return;
    }
    if (this.isProjectLoading()) return;

    this.isProjectLoading.set(true);

    try {
      this.authService.storeSelectedProject(project);
      setTimeout(() => this.isProjectLoading.set(false), 300);
    } catch (err) {
      console.error('Failed to switch project:', err);
      this.isProjectLoading.set(false);
      this.revertToPreviousSelection();
    }
  }

  // ---- constructor -------------------------------------------------------
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userSelection: [''],
    });
  }
}