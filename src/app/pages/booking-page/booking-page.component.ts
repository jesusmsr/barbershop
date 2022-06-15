import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe(response => {
      console.log(response);
    })
  }

}
