import { RestaurantMenuComponent } from "./../../components/restaurant-menu/restaurant-menu.component";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "./../../services/restaurants.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  RestaurantId = "";
  menu: {};
  details: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantsService: RestaurantsService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.RestaurantId = params.RestaurantId;
    });
  }

  @ViewChild(RestaurantMenuComponent, { static: false })
  child: RestaurantMenuComponent;

  ngOnInit() {
    this.restaurantsService.getRestaurant(this.RestaurantId).subscribe(data => {
      this.menu = data.menu;
      this.details = {
        name: data.name,
        img: data.img,
        chef: data.chef
      };
    });
  }

  invokeScroll(category: string) {
    this.child.scroll(category);
  }
}
