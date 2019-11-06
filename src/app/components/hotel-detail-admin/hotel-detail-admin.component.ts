import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hotel-detail-admin',
  templateUrl: './hotel-detail-admin.component.html',
  styleUrls: ['./hotel-detail-admin.component.scss']
})
export class HotelDetailAdminComponent implements OnInit {

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
