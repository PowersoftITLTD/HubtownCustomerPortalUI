import { Component,inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { BookingState } from '../../state/booking.state';
import { ViewPaymentDetailModel } from '../../models/view-details.model';
import { DownloadBookingFile } from '../../actions/booking.actions';

import formatToINRCurrency from 'src/app/utils/formatHelper';

@Component({
  selector: 'app-payment-sch-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-sch-modal.component.html',
  styleUrl: './payment-sch-modal.component.css'
})
export class PaymentSchModalComponent implements OnInit{
  private store = inject(Store);
  viewDetail!:ViewPaymentDetailModel | null;

  formatToINRCurrency= formatToINRCurrency
  ngOnInit(): void {
    this.store.select(BookingState.getPaymentViewDetails).subscribe(detail=>{
      if(detail){
        this.viewDetail = detail;        
      }
    })
  }

}
