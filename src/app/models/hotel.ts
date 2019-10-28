export class Hotel {
    id: number;
    name: string;
    stars: number;
    direction: string;
    benefits: string[];
    price: number;
    fullday: FullDay ;
    city: City;
    state: State;
    rooms: Room[];
  }

export class FullDay {
  available: boolean;
  price: number;
}

export class State {
    id: number;
    name: string;
}

export class City {
    id: number;
    name: string;
    state: State;
}

export class Room {
    name: string;
    view: string;
    capacity: number;
    comodities: string[];
}
