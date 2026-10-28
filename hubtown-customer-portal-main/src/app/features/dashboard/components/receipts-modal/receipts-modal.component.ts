import { Component,inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { BookingState } from '../../state/booking.state';
import { ViewDetailModel } from '../../models/view-details.model';
import { DownloadBookingFile } from '../../actions/booking.actions';

import formatToINRCurrency from 'src/app/utils/formatHelper';


@Component({
  selector: 'app-receipts-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receipts-modal.component.html',
  styleUrl: './receipts-modal.component.css',
})
export class ReceiptsModalComponent implements OnInit{
  private store = inject(Store);
  viewDetail!:ViewDetailModel | null;
  formatToINRCurrency= formatToINRCurrency
  ngOnInit(): void {
    this.store.select(BookingState.getViewDetails).subscribe(detail=>{
      if(detail){
        this.viewDetail = detail;  
             console.log('viewDetail: ',this.viewDetail);
 
      }
    })
  }

  downloadFile(filename:string){
    if(filename && filename != ''){
      this.store.dispatch(new DownloadBookingFile(filename));
    }
  }
 downloadDemandORReceiptLetter(filename: any) {
  // console.log('File DemandLetter: ', filename?.invoiceUrl);
  // if (filename && filename != '') {
  //   const blob = new Blob([''], { type: 'application/pdf' });
  //   const url = URL.createObjectURL(blob);
  //   window.open(url, '_blank');

  //   // Clean up memory after opening
  //   setTimeout(() => URL.revokeObjectURL(url), 10000);
  // }
}
}
