import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-ver-ofertas',
  templateUrl: './ver-ofertas.component.html',
  styleUrls: ['./ver-ofertas.component.scss']
})
export class VerOfertasComponent implements OnInit {


  hotels: Hotel[];

  constructor(private hotelService: HotelService) { 
    
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => this.hotels = hotels);
  }

  ngOnInit() {
    this.getHotels();
  }

}
