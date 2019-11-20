import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hotel } from '../models/hotel';
import { ROOMS } from '../models/mock-rooms';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const hotels = [
      {
        id: 1,
        name: 'Calma Oasis',
        stars: 3,
        direction: 'Venezuela, Lara, Barquisimeto',
        benefits: [' Canchas de tenis', 'Canchas de futbol','Viaje por toda la ciudad'],
        price: 90,
        city: 'Barquisimeto',
        state: 'Lara',
        picture: 'https://www.hotelciudadbonita.com/cache/b2/39/b23962543627b49297ddc1f229d3bbfe.jpg',
        rooms: ROOMS
      },
    {
        id: 2,
        name: 'Eurobuilding',
        stars: 4,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: [' Deayuno incluido', ' Piscina'],
        price: 75,
        city: 'Caracas',
        state: 'Distrito Capital',
        picture: '../../assets/pics/htl1.jpg',
        rooms: ROOMS
      },
    {
        id: 3,
        name: 'Hotel Ático',
        stars: 5,
        direction: 'Venezuela, Mérida, Mérida',
        benefits: ['Descuento del 45% para abuelos', ' Trucha gratuita en la cena','clases para pescar trucha'],
        price: 105,
        city: 'Mèrida',
        state: 'Mérida',
        picture: 'https://centrourbano.com/revista/wp-content/uploads/Allende_opt-700x400.png',
        rooms: ROOMS
      },
    {
        id: 4,
        name: 'El Bienestar',
        stars: 4,
        direction: 'Venezuela, Coro, Falcón',
        benefits: [' Viaje a los Médanos de Coro', 'Playa','Piscina'],
        price: 85,
        city: 'Coro',
        state: 'Falcón',
        picture: 'https://r-cf.bstatic.com/images/hotel/max1024x768/474/47449843.jpg',
        rooms: ROOMS
      },
    {
        id: 5,
        name: 'Silvestre',
        stars: 5,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: ['Piscina', ' Viaje por toda la ciudad','Gimnasio'],
        price: 125,
        city: 'Caracas',
        state: 'distrito capital',
        picture: 'http://www.abctelefonos.com/images/comercios/266349_14021_original.jpg',
        rooms: ROOMS
      },
    {
        id: 6,
        name: 'Habbo Caracas',
        stars: 5,
        direction: 'Venezuela, Distrito Capital, Caracas',
        benefits: ['Visita al club de fans de la comunidad de Habbo en Caracas'],
        price: 80,
        city: 'Caracas',
        state: 'Distrito Capital',
        picture: 'https://vignette.wikia.nocookie.net/habbo/images/a/af/View_it.gif/revision/latest?cb=20120721181434&path-prefix=en',
        rooms: ROOMS
      }
    ];
    return {hotels};
  }

 

  genId(hotels: Hotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hotel => hotel.id)) + 1 : 1;
  }
}
