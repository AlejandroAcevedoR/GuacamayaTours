import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../../models/mock-rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  rooms = ROOMS;

  constructor() { }

  ngOnInit() {
  }

}
