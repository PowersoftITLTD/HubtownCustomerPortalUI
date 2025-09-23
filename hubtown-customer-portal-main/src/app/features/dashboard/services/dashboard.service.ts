import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {
  private apiUrl = environment.apiUrl; 
//   private readonly TOKEN_KEY = 'authToken';  // Key for local storage
//   private readonly PROJECTS_KEY = 'userProjects';  // Key for storing projects in local storage
//   private readonly SELECTED_PROJECT_KEY = 'userSelectedProject';
//   private readonly USER_KEY = 'userInfo';  // Key for storing user data in local storage


//   private isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';


  constructor(private http: HttpClient, private store: Store) {}

  getBooking(userId: string, projectId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetBooking?UserID=${userId}&ProjectID=${projectId}`);
  }

  getDemandBreakup(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetDemandBreakup?BookingID=${bookingId}`);
  }

  getAccountSummary(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetAccountSummary?BookingID=${bookingId}`);
  }

  getBankPayableAccount(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetBankPayableAccounts?BookingID=${bookingId}`);
  }

  getDemandLetter(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetDemandLetters?BookingID=${bookingId}`);
  }

  getReceipt(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetReceipts?BookingID=${bookingId}`);
  }

  getTds(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/TDS/GetTDSDetails?BookingID=${bookingId}`);
  }

  getNoc(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetHomeLoanNOC?BookingID=${bookingId}`);
  }

  getFaq(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Notification/GetFAQ/GetFAQ`);
  }

  getJointOwners(userId: string, bookingId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetCoOwner?UserID=${userId}&BookingID=${bookingId}`);
  }

  getMileStone(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetMilestones?BookingID=${bookingId}`);
  }

  getKyc(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/KYC/GetKYCDetails?BookingID=${bookingId}`);
  }

  uploadKyc(bookingId: number,ownerName:string,documentName:string,userId:string,file:File): void {
    const formData = new FormData();
    formData.append('file', file, file.name); // Append the file to FormData
    this.http.post(`${this.apiUrl}/Customer/KYC/UploadKYCFile?BookingID=${bookingId}&OwnerName=${ownerName}&DocumentName=${documentName}&UserID=${userId}`,formData).subscribe({
      next: (response) => {
        console.log('Upload successful:', response);
        return response
      },
      error: (error) => {
        console.error('Upload failed:', error);
      },
    });
  }

  getKYCFiles(filename: string): void {
    this.http.get(`${this.apiUrl}/Customer/KYC/DownloadKYCFile?fileName=${filename}`, { responseType: 'blob' })
    .subscribe((blob: Blob) => {
      this.downloadFile(blob,filename);
    }, (error) => {
      console.error('Error downloading file:', error);
    });
  }

  deleteKyc(kycId: string,): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Customer/KYC/DeleteKYCFile?kycid=${kycId}`);
  }

  getTdsFile(filename: string): void {
    this.http.get(`${this.apiUrl}/Customer/TDS/DownloadTDSFile?fileName=${filename}`, { responseType: 'blob' })
    .subscribe((blob: Blob) => {
      this.downloadFile(blob,filename);
    }, (error) => {
      console.error('Error downloading file:', error);
    });
  }

  getBookingFiles(filename: string): void {
    this.http.get(`${this.apiUrl}/Customer/Booking/DownloadFile?fileName=${filename}`, { responseType: 'blob' })
    .subscribe((blob: Blob) => {
      this.downloadFile(blob,filename);
    }, (error) => {
      console.error('Error downloading file:', error);
    });
  }

  downloadFile(blob:Blob,filename:string){
    // Create a temporary URL for the blob and trigger download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Set the filename for the download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url); // Clean up the URL object
  }

  getProjectUpdates(projectId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetProjectUpdates?projectid=${projectId}`);
  }
  getUpcomingProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Booking/GetUpcomingProject`);
  }

  getNotification(bookingId: number,): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Customer/Notification/GetNotificationsByBookingID/${bookingId}`);
  }

  markNotificationAsRead(notificationId: number,): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Customer/Notification/UpdateNotificationStatus/${notificationId}`, {});
  }
  
  uploadTDS(bookingId: number,tDSDate:string,transactionNo:string, tDSAmount: string, userId:string,file:File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name); // Append the file to FormData
    return this.http.post(`${this.apiUrl}/Customer/TDS/UploadTDSFile?BookingID=${bookingId}&TDSDate=${tDSDate}&TransactionNo=${transactionNo}&TDSAmount=${tDSAmount}&UserID=${userId}`,formData)
  }
}
