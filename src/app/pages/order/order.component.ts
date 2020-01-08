import { RestaurantMenuComponent } from './../../components/restaurant-menu/restaurant-menu.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

@ViewChild(RestaurantMenuComponent,{static: false}) child: RestaurantMenuComponent

  ngOnInit() {
  }

  invokeScroll(category:string){
    this.child.scroll(category)
  }

}
