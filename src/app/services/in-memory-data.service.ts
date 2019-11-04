import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const hotels = [
      {
        id: 1,
        name: 'eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' deayuno incluido', ' pisina'],
        price: 9999,
        city: 'caracas',
        state: 'distrito capital',
        picture: '../../assets/pics/htl1.jpg'
      },
    {
        id: 2,
        name: 'eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' deayuno incluido', ' pisina'],
        price: 9999,
        city: 'caracas',
        state: 'distrito capital',
        picture: '../../assets/pics/htl1.jpg'
      },
    {
        id: 3,
        name: 'eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' deayuno incluido', ' pisina'],
        price: 9999,
        city: 'caracas',
        state: 'distrito capital',
        picture: '../../assets/pics/htl1.jpg'
      },
    {
        id: 4,
        name: 'eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' deayuno incluido', ' pisina'],
        price: 9999,
        city: 'caracas',
        state: 'distrito capital',
        picture: '../../assets/pics/htl1.jpg'
      },
    {
        id: 5,
        name: 'eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' deayuno incluido', ' pisina'],
        price: 9999,
        city: 'caracas',
        state: 'distrito capital',
        picture: '../../assets/pics/htl1.jpg'
      },
    {
        id: 6,
        name: 'eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' deayuno incluido', ' pisina'],
        price: 9999,
        city: 'caracas',
        state: 'distrito capital',
        picture: '../../assets/pics/htl1.jpg'
      }
    ];
    return {hotels};
  }

  genId(hotels: Hotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hotel => hotel.id)) + 1 : 1;
  }
}
