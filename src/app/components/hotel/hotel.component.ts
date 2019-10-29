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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.hotelService.addHotel({ name } as Hotel)
      .subscribe(hero => {
        this.hotels.push(hero);
      });
  }

  delete(hotel: Hotel): void {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHotel(hotel).subscribe();
  }

  ngOnInit() {
    this.getHotels();
  }

}
