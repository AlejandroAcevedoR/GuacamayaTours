import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

  @Input() hotel: Hotel;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location
  ) {}

  getHotel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id)
      .subscribe(hero => this.hotel = hero);
  }

  ngOnInit() {
    this.getHotel();
  }

  save(): void {
    this.hotelService.updateHotel(this.hotel)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
