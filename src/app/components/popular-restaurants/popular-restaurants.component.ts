import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-restaurants',
  templateUrl: './popular-restaurants.component.html',
  styleUrls: ['./popular-restaurants.component.scss']
})
export class PopularRestaurantsComponent implements OnInit {

  popularRestaurants = [
    {
      'id': "bla",
      'img':"../../../assets/photos/claro@2x.jpg",
      'title': "Gilad",
      'chef': "Ran Shmueli"
    },
    {
      'id': "bla",
      'img':"../../../assets/photos/claro@2x.jpg",
      'title': "Nati",
      'chef': "Ran Shmueli"
    },
    {
      'id': "bla",
      'img':"../../../assets/photos/claro@2x.jpg",
      'title': "Daniel",
      'chef': "Ran Shmueli"
    },
   ]

  constructor() { }

  ngOnInit() {
  }

}
