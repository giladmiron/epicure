import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService) { }

  restaurants: {}[]

  ngOnInit() {
    this.restaurantsService.getRestaurants().subscribe(data => {
      this.restaurants = data
    })
  }

}
