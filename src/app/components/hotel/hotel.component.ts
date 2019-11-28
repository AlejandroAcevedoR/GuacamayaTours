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
  filteredHotels: Hotel[] = [];
  _listFilter = '';
  stars = [1, 2, 3, 4, 5];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredHotels = this.listFilter ? this.doFilter(this.listFilter) : this.hotels;
  }

  doFilter(filterBy: string): Hotel[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.hotels.filter((hotel: Hotel) =>
        hotel.name.toLocaleLowerCase().indexOf(filterBy) !== -1 || hotel.state.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private hotelService: HotelService) {
    this.filteredHotels = this.hotels;
    this.listFilter = '';
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => this.hotels = hotels);
  }

  ngOnInit() {
    this.getHotels();
  }

}
