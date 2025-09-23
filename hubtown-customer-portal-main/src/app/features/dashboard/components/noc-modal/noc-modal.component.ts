import { Component,OnInit,inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NocItem } from '../../models/project-details.model';
import { BookingState } from '../../state/booking.state';
import { FetchNOC,DownloadBookingFile } from '../../actions/booking.actions';
import formatToINRCurrency from 'src/app/utils/formatHelper';


@Component({
  selector: 'app-noc-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noc-modal.component.html',
  styleUrl: './noc-modal.component.css',
})
export class NocModalComponent implements OnInit {
  private store = inject(Store);
  noc$!:Observable<NocItem[]>
  nocData:NocItem[] = []
  formatToINRCurrency = formatToINRCurrency

  ngOnInit(): void {
    this.store.select(BookingState.getBookings).subscribe(booking=>{
      if(booking?.[0]?.bookingID){
        this.store.dispatch(new FetchNOC(booking?.[0]?.bookingID));
        this.noc$ = this.store.select(BookingState.getNoc);        
      
        this.noc$.subscribe((data: NocItem[]) => {
          this.nocData = data; // Populate NocDATA
        });
      }
    })
  }


  downloadFile(filename:string){
    if(filename && filename != ''){
      this.store.dispatch(new DownloadBookingFile(filename));
    }
  }
}
