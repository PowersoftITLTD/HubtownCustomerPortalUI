import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/storeNgxs/auth.state';
import { User } from 'src/app/auth/storeNgxs/model/user.model';
import { BookingState } from '../../state/booking.state';
import { DeleteKyc, DownloadKYCFile, FetchKyc, UploadKyc } from '../../actions/booking.actions';
import { KycItem } from '../../models/project-details.model';

@Component({
  selector: 'app-kyc-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kyc-modal.component.html',
  styleUrl: './kyc-modal.component.css',
})
export class KycModalComponent implements OnInit{
  private store = inject(Store);
  user: User | null = null;
  kyc$!:Observable<KycItem[]>;
  kyclist : KycItem[] = [];
  today:Date = new Date();
  documentName:string = '';
  bookingId : number = 0;
  groupedItems: { ownerName: string, isAddNew:number, items: KycItem[] }[] = [];
  uploadedFile: File | null = null;
  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AuthState.getUser);
    this.loadKycData();
  }

  loadKycData(){
    this.store.select(BookingState.getBookings).subscribe(booking => {
      
      if(booking?.[0]?.bookingID){
        this.bookingId = booking?.[0]?.bookingID;
        this.store.dispatch(new FetchKyc(booking?.[0]?.bookingID));
        this.kyc$ = this.store.select(BookingState.getKyc);

        this.kyc$.subscribe(
          (items: KycItem[]) => {
            this.kyclist = items;  // Set the emitted values to the component property
            
            this.kyclist.sort((a,b)=> {
              if (a.ownerName < b.ownerName) return -1;
              if (a.ownerName > b.ownerName) return 1;
              return 0;
            });

            this.groupByOwnerName();
          },
          (error) => {
            console.error('Error receiving items:', error);
          }
        );
      }
    });
  }

  groupByOwnerName() {
    const grouped:{ [key: string]: KycItem[] } = this.kyclist.reduce((acc:{ [key: string]: KycItem[] }, item:KycItem) => {
      // Group by ownerName
      const key = item.ownerName;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    // Convert the object to an array for easier looping
    this.groupedItems = Object.keys(grouped).map(ownerName => {
      return {
        ownerName: ownerName,
        isAddNew:0,
        items: grouped[ownerName]
      };
    });
  }

  addNew(ownerName:string){
    this.groupedItems.map(x=>{
      if(x.ownerName == ownerName){
        x.isAddNew = 1;
      }else{
        x.isAddNew = 0;
      }
    })
    console.log("groupedItems",this.groupedItems);
  }

  cancelAddNow(ownerName:string){
    this.groupedItems.map(x=>{
      if(x.ownerName == ownerName){
        x.isAddNew = 0;
      }
    })
  }

  deleteKyc(kycId:string,ownerName:string){
    if(kycId != ''){
      this.store.dispatch(new DeleteKyc(kycId));
      setTimeout(() => {
        this.loadKycData();
      }, 1000);
    }
    else{
      this.groupedItems.map(x=>{
        if(x.ownerName == ownerName){
          x.isAddNew = 0;
        }
      })
    }
  }

  onInput(value: string) {
    this.documentName = value; // Update the userName variable when input changes
  }

  downloadFile(filename:string){
    if(filename && filename != ''){
      this.store.dispatch(new DownloadKYCFile(filename));
    }
  }
  

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadedFile = input.files[0];
      // this.documentName = this.uploadedFile.name; // Get the name of the selected file
      // You can further process the file here if needed (e.g., upload it)
    }else{
      this.uploadedFile = null;
    }
  }

  uploadKyc(ownerName:string){
    if(this.documentName == ''){
      alert('Document name required');
    }else if (!this.uploadedFile){
      alert('Please select a file');
    }else{
      let userId = this.user?.userID || '';
      this.store.dispatch(new UploadKyc(this.bookingId,ownerName,this.documentName,userId,this.uploadedFile));
      setTimeout(() => {
        this.loadKycData();  
      }, 1000);
    }
  }
}
