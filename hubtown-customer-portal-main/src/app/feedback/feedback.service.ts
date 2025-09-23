import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    // console.log(this.apiUrl);
    // debugger;
  }

  submitFeedback(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Feedback/SaveFeedback`, payload);
  }

  feedbackInformation(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Feedback/GetInformationList`);
  }

  getFeedbackList(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Feedback/GetFeedback`, payload);
  }
}
