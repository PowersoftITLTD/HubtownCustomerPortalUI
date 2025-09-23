import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';
import { AvatarModule } from 'ngx-avatars';
import { User } from 'src/app/auth/storeNgxs/model/user.model';
import { NotificationItem } from '../../models/project-details.model';
import { Observable } from 'rxjs';
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
  projects: any[] | null = [];
  selectedProject: any | null = null;
  user: any = null;
  notification$!: Observable<NotificationItem[]>;
  hasUnreadNotifications = signal<boolean>(true);
  notificationId: number[] = [];
  isUserDropdown = false;
  users = <any>[];
  userForm: FormGroup;
  selectedUserValue: any;
  isDropdownVisible: any = false;

  toggleDropdown(type: string) {
    if (type === 'user') {
      this.isUserDropdown = !this.isUserDropdown;
    }
  }

  closeDropdown(type: string) {
    if (type === 'user') {
      this.isUserDropdown = false;
    }
  }

  getUsersList() {
    this.authService.getUsersList().subscribe({
      next: (response) => {
        // this.users = response?.Data || [];
        this.users = (response?.Data || [])?.sort((a: any, b: any) => {
          const stripTitle = (name: string) =>
            name?.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/i, '').trim();

          const nameA = stripTitle(a.userName || '');
          const nameB = stripTitle(b.userName || '');

          return nameA.localeCompare(nameB);
        });
      },
      error: (error) => {
        console.log('Error fetching feedback info:', error);
      },
    });
  }

  handleUserSubmitClick() {
    this.selectedUserValue = this.userForm.get('userSelection')?.value;
    const isAdmin = localStorage.getItem('isLoginAdmin');

    this.authService
      .verifyOtp({
        userID: this.selectedUserValue,
        enteredOTP: '123456',
        isAdmin: isAdmin === 'true',
      })
      .subscribe({
        next: (res) => {
          if (res.Success) {
            this.selectedUserValue = this.users.find(
              (user: any) => user.userId === this.selectedUserValue
            );
            if (this.selectedUserValue) {
              this.userForm.patchValue({
                userSelection: this.selectedUserValue?.userId,
              });
            }
            if (res?.Data?.token) {
              this.store.dispatch(new SetToken(res?.Data?.token)); // Update the state with the new token
            }
          } else {
            console.error('OTP verification failed:', res.Data.message);
          }
        },
        error: (err) => {
          console.error('Error:', err);
        },
      });
  }

  markNotificationsAsRead() {
    this.notificationId.forEach((_notificationId) => {
      this.dashboardService.markNotificationAsRead(_notificationId).subscribe();
    });
    this.hasUnreadNotifications.set(false);
  }

  ngOnInit(): void {
    this.getUsersList();
    this.projects = this.store.selectSnapshot(AuthState.getProjects);

    this.store.select(AuthState.getUser).subscribe((user: any) => {
      this.user = user;
      const data: any = localStorage.getItem('isLoginAdmin');
      this.isDropdownVisible = data;

      this.userForm.patchValue({
        userSelection: this.user.userID,
      });
    });
    this.store.select(AuthState.getSelectedProject).subscribe((e) => {
      if (e) {
        this.selectedProject = e;
      }
    });

    // this.selectedUserValue = this.users.find(
    //   (user: any) => user.userId === this.selectedUserValue
    // );

    this.store.select(BookingState.getBookings).subscribe((booking) => {
      if (booking?.[0]?.bookingID) {
        this.store.dispatch(new FetchNotification(booking?.[0]?.bookingID));
        this.notification$ = this.store.select(BookingState.getnotification);

        this.notification$.subscribe((items: NotificationItem[]) => {
          items.forEach((n) => {
            this.notificationId.push(n.notificationID);
          });
        });
      }
    });
  }

  handleLogoutClick() {
    this.authService.logout();
    // localStorage.removeItem("isLoginAdmin")
  }

  onProjectChange(project: any) {
    this.authService.storeSelectedProject(project);
  }

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userSelection: [''],
    });
  }
}
