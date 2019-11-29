import { Room } from './Room';
export class Hotel {
    id: number;
    name: string;
    stars: number;
    direction: string;
    benefits: string[];
    price: number;
    city: string;
    state: string;
    picture: string;
    rooms: Room[];
  }
