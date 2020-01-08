import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  breakfast: { id: number, img: string, ingredients: string, icons: string, price: number }[]
  lunch: { id: number, img: string, ingredients: string, icons: string, price: number }[]
  dinner: { id: number, img: string, ingredients: string, icons: string, price: number }[]


  constructor(private _elementRef : ElementRef) { }

  ngOnInit() {
  }

  scroll(category: string) {
    this._elementRef.nativeElement.querySelector(`#${category}`).scrollIntoView()
  }

}
