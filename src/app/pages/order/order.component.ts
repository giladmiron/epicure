import { RestaurantMenuComponent } from './../../components/restaurant-menu/restaurant-menu.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../services/restaurants.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  menuId = ''
  menu: {}

  constructor(private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService ) { 
    this.activatedRoute.params.subscribe(params=> {
      this.menuId = params.menuId
    })
  }

@ViewChild(RestaurantMenuComponent,{static: false}) child: RestaurantMenuComponent

  ngOnInit() {
    this.restaurantsService.getMenu(this.menuId).subscribe(data=> {
      this.menu = data
    })
  }

  invokeScroll(category:string){
    this.child.scroll(category)
  }

}
