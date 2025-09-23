import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {MileStoneItem }from '../../models/project-details.model';
import { BookingState } from '../../state/booking.state';
import { FetchMileStone,DownloadBookingFile } from '../../actions/booking.actions';

@Component({
  selector: 'app-milestone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './milestone.component.html',
  styleUrl: './milestone.component.css',
})
export class MilestoneComponent implements OnInit {
  private store = inject(Store);
  milestone$!: Observable<MileStoneItem[]>;
  currentMileStone : MileStoneItem[] = [];

  ngOnInit(): void {
    this.store.select(BookingState.getBookings).subscribe(booking => {
      if(booking?.[0]?.bookingID){
        this.store.dispatch(new FetchMileStone(booking?.[0]?.bookingID));
        this.milestone$ = this.store.select(BookingState.getMileStone);

        this.milestone$.subscribe(
          (items: MileStoneItem[]) => {            
          this.currentMileStone = [];
          if(items && items.length){
            // items.sort((a,b)=>{
            //   const dateA = new Date(a.actualDate).getTime();
            //   const dateB = new Date(b.actualDate).getTime();
            //   return dateA - dateB;
            // });

            const itemsSortedApi = [...items].sort((a, b) => (a.sequenceno - b.sequenceno));

            const cMS = itemsSortedApi.find(ms => ms.currentMS == "C");
            if(cMS){
              this.currentMileStone = [cMS];
            }else{
              this.currentMileStone = [itemsSortedApi[0]];
            }
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
}
