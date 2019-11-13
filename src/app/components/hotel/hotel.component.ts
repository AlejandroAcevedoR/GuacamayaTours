import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => this.hotels = hotels);
  }

  ngOnInit() {
    this.getHotels();
  }

}