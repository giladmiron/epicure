import { Injectable } from '@angular/core';
import { Restaurant } from './../models/Restaurant';
import { Menu } from '../models/Menu';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  url: string = 'http://epicure-gilad.moveodevelop.com/api/'

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.url+ 'restaurants')
    //handle errors
  }

  getMenu(menuId): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.url+ 'menu/' + menuId)
    //handle errors
  }
}
