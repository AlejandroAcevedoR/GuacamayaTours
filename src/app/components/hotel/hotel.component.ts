import { Component, OnInit } from '@angular/core';
import { HOTELS } from '../../models/mock-hotels';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotels = HOTELS;

  constructor() { }

  ngOnInit() {
  }

}
