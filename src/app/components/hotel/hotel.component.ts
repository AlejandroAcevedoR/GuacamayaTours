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
  _starFilter = '';
  _stateFilter = '';
  stars = [1, 2, 3, 4, 5];
  listFilter = '';
  priceFilter = '';

  sstate(value: string) {
    this._stateFilter = value;
  }

  get stateFilter(): string {
    return this._stateFilter;
  }

  sstars(value: number) {
    if (value === 6) {
      this._starFilter = '';
    } else {
      this._starFilter = value.toString();
    }
  }

  get starFilter(): string {
    return this._starFilter;
  }
  
  constructor(private hotelService: HotelService) {
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => this.hotels = hotels);
  }

  ngOnInit() {
    this.getHotels();
  }

}
