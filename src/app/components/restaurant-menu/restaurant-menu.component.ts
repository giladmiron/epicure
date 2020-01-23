import { Component, OnInit, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-restaurant-menu",
  templateUrl: "./restaurant-menu.component.html",
  styleUrls: ["./restaurant-menu.component.scss"]
})
export class RestaurantMenuComponent implements OnInit {
  showPopup: boolean = false;
  dishDetails: {};
  @Input() menu: {} = {};

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.menu);
  }

  scroll(category: string) {
    this._elementRef.nativeElement
      .querySelector(`#${category}`)
      .scrollIntoView();
  }

  PopupStateChange(dish = "") {
    this.dishDetails = dish;
    this.showPopup = !this.showPopup;
  }
}
