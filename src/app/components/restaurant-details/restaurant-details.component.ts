import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-restaurant-details",
  templateUrl: "./restaurant-details.component.html",
  styleUrls: ["./restaurant-details.component.scss"]
})
export class RestaurantDetailsComponent implements OnInit {
  categoryStatus: any = {
    Breakfast: true,
    Lunch: false,
    Dinner: false
  };

  constructor() {}

  @Output() invoke = new EventEmitter();
  @Input() details: any = {};

  ngOnInit() {}

  changeCategory(event) {
    let newCategoryStatus = {
      Breakfast: false,
      Lunch: false,
      Dinner: false
    };
    newCategoryStatus[event.target.innerHTML.trim()] = true;
    this.categoryStatus = newCategoryStatus;
  }

  invokeParentScrollFunction(category: string) {
    this.invoke.emit(category);
  }
}
