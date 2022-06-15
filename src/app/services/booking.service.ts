import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://127.0.0.1:8000';

  constructor(
    private http: HttpClient
  ) { }

  getAllBookings() {
    return this.http.get(`${this.baseUrl}/bookings/booking/`);
  }
}
