import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.scss']
})
export class ChefOfTheWeekComponent implements OnInit {

  chefRestaurants: { img: string, resName: string }[] = [{
    img: '../../../assets/photos/screen-shot-2019-01-06-at-10-55-45@2x.jpg',
    resName: 'Onza'
  }
    , {
    img: '../../../assets/photos/screen-shot-2019-01-06-at-10-55-45@2x.jpg',
    resName: 'Onza'
  }, {
    img: '../../../assets/photos/screen-shot-2019-01-06-at-10-55-45@2x.jpg',
    resName: 'Onza'
  }]

  constructor() { }

  ngOnInit() {
  }

}
