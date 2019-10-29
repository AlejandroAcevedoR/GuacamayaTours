import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HotelService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private hotelsUrl = 'api/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl);
  }

  getHotel(id: number): Observable<Hotel> {
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.get<Hotel>(url);
  }

  updateHotel(hero: Hotel): Observable<any> {
    return this.http.put(this.hotelsUrl, hero, this.httpOptions);
  }

  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.hotelsUrl, hotel, this.httpOptions);
  }

  deleteHotel(hotel: Hotel | number): Observable<Hotel> {
    const id = typeof hotel === 'number' ? hotel : hotel.id;
    const url = `${this.hotelsUrl}/${id}`;
    return this.http.delete<Hotel>(url, this.httpOptions);
  }
}
