import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chef-restaurants-box',
  templateUrl: './chef-restaurants-box.component.html',
  styleUrls: ['./chef-restaurants-box.component.scss']
})
export class ChefRestaurantsBoxComponent implements OnInit {

  @Input() data
  chefRestaurants: { img: string, resName: string }[] = []

  constructor() { }

  ngOnInit() {
    this.chefRestaurants = this.data
  }

}
