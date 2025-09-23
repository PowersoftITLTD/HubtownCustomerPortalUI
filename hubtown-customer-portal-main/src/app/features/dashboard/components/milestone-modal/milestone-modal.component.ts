import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {MileStoneItem }from '../../models/project-details.model';
import { BookingState } from '../../state/booking.state';
import { DownloadBookingFile } from '../../actions/booking.actions';

@Component({
  selector: 'app-milestone-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone-modal.component.html',
  styleUrl: './milestone-modal.component.css',
})
export class MilestoneModalComponent implements OnInit {
  private store = inject(Store);
  milestone$!: Observable<MileStoneItem[]>;
  sortedMileStone : MileStoneItem[] = [];
  ngOnInit(): void {
    this.store.select(BookingState.getBookings).subscribe(booking => {
      if(booking?.[0]?.bookingID){
        this.milestone$ = this.store.select(BookingState.getMileStone);

        this.milestone$.subscribe(
          (items: MileStoneItem[]) => {            
          this.sortedMileStone = [];
          this.sortedMileStone = items;
          if(items && items.length){
            this.sortedMileStone = [...items].sort((a, b) => (a.sequenceno - b.sequenceno));       
          }
          },
          (error) => {
            console.error('Error receiving items:', error);
          }
        );

      }
    })
  }

  downloadFile(filename:string){
    if(filename && filename != ''){
      this.store.dispatch(new DownloadBookingFile(filename));
    }
  }

  isMilestoneEnabled(milestone: MileStoneItem): boolean {
    return milestone?.currentMS === 'C'; // Only 'C' (Completed) is enabled
  }
}
