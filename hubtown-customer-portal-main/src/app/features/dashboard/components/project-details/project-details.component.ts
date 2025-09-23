import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';
import { User } from 'src/app/auth/storeNgxs/model/user.model';
import {
  DownloadBookingFile,
  DownloadTDSFile,
  FetchJointOwner,
  SetBooking,
} from '../../actions/booking.actions';
import { Booking } from '../../models/booking.model';
import { BookingState } from '../../state/booking.state';
import { AvatarModule } from 'ngx-avatars';
import { JointOwner } from '../../models/project-details.model';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css',
})
export class ProjectDetailsComponent {
  private store = inject(Store);
  // public bookings$: Observable<Booking[]> = this.store.select(BookingState.getBookings);
  bookings$!: Observable<Booking[]>;
  selectedProject: any;
  user: User | null = null;
  jointOwner$!: Observable<JointOwner[]>;
  constructor() {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AuthState.getUser);
    this.store.select(AuthState.getSelectedProject).subscribe((e) => {
      if (e && this.user) {
        this.selectedProject = e;

        // console.log("selectedProject", this.selectedProject);
        // Dispatch the action to fetch booking details
        // this.store.dispatch(new FetchBooking(user.userID, this.selectedProject?.projectId)); //commented to read data from local storage
        let booking = [this.selectedProject?.booking];
        this.store.dispatch(new SetBooking(booking));
        this.bookings$ = this.store.select(BookingState.getBookings);
        

        this.store.dispatch(
          new FetchJointOwner(this.user?.userID, booking[0]?.bookingID)
        );
        this.jointOwner$ = this.store.select(BookingState.getJointOwner);
      }
    });
  }

  downloadFile(filename: string): void {
    if (filename && filename != '') {
      this.store.dispatch(new DownloadBookingFile(filename));
    }
  }
}
