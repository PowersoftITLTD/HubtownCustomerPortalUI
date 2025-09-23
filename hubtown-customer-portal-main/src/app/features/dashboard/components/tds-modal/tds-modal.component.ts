import { Component,OnInit,inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TDSItem } from '../../models/project-details.model';
import { BookingState } from '../../state/booking.state';
import { FetchTDS, DownloadTDSFile } from '../../actions/booking.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';
import formatToINRCurrency from 'src/app/utils/formatHelper';



@Component({
  selector: 'app-tds-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tds-modal.component.html',
  styleUrl: './tds-modal.component.css',
})
export class TdsModalComponent implements OnInit {
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private dashboardService = inject(DashboardService);
  uploadTdsForm!: FormGroup;
  tds$!:Observable<TDSItem[]>;
  showUploadTds = false;
  bookingId!: number;
  userId: string = '';
  file: any;
  tdsData:TDSItem[] =[]
  formatToINRCurrency = formatToINRCurrency

  ngOnInit(): void {
    this.userId = this.store.selectSnapshot(AuthState.getUser)?.userID ?? '';
    this.store.select(BookingState.getBookings).subscribe(booking=>{
      if(booking?.[0]?.bookingID){
        this.bookingId = booking?.[0]?.bookingID;
        this.store.dispatch(new FetchTDS(booking?.[0]?.bookingID));
        this.tds$ = this.store.select(BookingState.getTDS);
        this.tds$.subscribe((data: TDSItem[]) => {
          this.tdsData = data; // Populate tdsData
        });
      }
    })
  }

  handleFileChange(event: any) {
    this.file = event?.target?.files?.[0] ?? null;
  }

  downloadTDS(filename:string):void{
    if(filename && filename !=''){
      this.store.dispatch(new DownloadTDSFile(filename));
    }
  }

  handleUploadTdsClick() {
    this.initForm();
    this.showUploadTds = true;
  }

  initForm() {
    this.uploadTdsForm = this.fb.group({
      TDSDate: ['', Validators.required],
      TransactionNo: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // only numbers allowed
      TDSAmount: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]], // numbers with optional decimal
      file: ['', Validators.required]
    })
  }

  handleSubmit() {
    if (this.uploadTdsForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    
    this.dashboardService.uploadTDS(this.bookingId, this.uploadTdsForm.value.TDSDate,this.uploadTdsForm.value.TransactionNo,this.uploadTdsForm.value.TDSAmount,this.userId, this.file).subscribe({
      next: (res) => {
        console.log(res);
        this.store.dispatch(new FetchTDS(this.bookingId));
        this.showUploadTds = false;
      }, error: (err) => {
        console.log(err);
        this.store.dispatch(new FetchTDS(this.bookingId));
        this.showUploadTds = false;
      }
    })
  }
}
