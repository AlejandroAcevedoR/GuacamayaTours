import { Component, OnInit } from '@angular/core';
import { Hotel, FullDay, State, City, Room } from '../../models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  fd: FullDay = {
    price: 999,
    available: true
  };

  st: State = {
    id: 1,
    name: 'distrito capital'
  };

  city: City = {
    id: 1,
    name: 'caracas',
    state: this.st
  };

  room: Room = {
    name: 'penthouse',
    view: 'panoramica',
    capacity: 6,
    comodities: ['servicio a la habitacion', 'limpiesa', 'jacuzi', 'balcon']
  };

  hotel: Hotel = {
    id: 1,
    name: 'eurobuilding',
    stars: 4,
    direction: 'Venezuela, ' + this.city.state.name + ', ' + this.city.name,
    benefits: [' deayuno incluido', ' pisina'],
    price: 9999,
    fullday: this.fd,
    city: this.city,
    state: this.city.state,
    rooms: [this.room, this.room]
  };

  constructor() { }

  ngOnInit() {
  }

}
