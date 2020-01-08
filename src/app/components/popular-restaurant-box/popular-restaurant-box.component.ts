import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-restaurant-box',
  templateUrl: './popular-restaurant-box.component.html',
  styleUrls: ['./popular-restaurant-box.component.scss']
})
export class PopularRestaurantBoxComponent implements OnInit {

  @Input() data;
  popularRestaurants: { id: string, img: string, title: string, chef: string }[] = []

  constructor() { }

  ngOnInit() {
    this.popularRestaurants = this.data
  }

}
