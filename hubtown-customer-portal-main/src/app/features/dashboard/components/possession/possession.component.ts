import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { BookingState } from '../../state/booking.state';
import { DownloadBookingFile } from '../../actions/booking.actions';

@Component({
  selector: 'app-possession',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './possession.component.html',
  styleUrl: './possession.component.css',
})
export class PossessionComponent implements OnInit {
  private store = inject(Store);

  fitoutDate = '';
  possesionDate = '';
  registrationNo = '';
  actualDate = '';
  tentativeDate = '';
  possessionDocumentUrl = '';
  registrationDocumentUrl = '';

  ngOnInit(): void {
    this.store.select(BookingState.getBookings).subscribe((booking) => {
      if (booking?.[0]) {
        const data = booking[0];

        this.fitoutDate = this.cleanDate(data?.fitoutDate);
        this.possesionDate = this.cleanDate(data?.possessionFinalDate);
        this.registrationNo = data?.registrationNumber || '';
        this.actualDate = this.cleanDate(data?.registrationActualDate);
        this.tentativeDate = this.cleanDate(data?.registrationTentativeDate);
        this.registrationDocumentUrl = data?.registrationDocumentUrl || '';
        this.possessionDocumentUrl = data?.possessionDocumentUrl || '';
      }
    });
  }

  downloadFile(filename: string): void {
    if (filename && filename !== '') {
      this.store.dispatch(new DownloadBookingFile(filename));
    }
  }

  private cleanDate(date: string | null | undefined): string {
    if (!date || date === '1900-01-01 00:00:00.000') {
      return '';
    }
    return date;
  }
}
