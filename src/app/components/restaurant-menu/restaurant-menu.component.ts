import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  breakfast: { id: number, img: string, name: string, ingredients: string, icons: [string], price: number }[] =
    [{
      id: 1,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    }, {
      id: 2,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    },
    {
      id: 3,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    },
    {
      id: 4,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    }
    ]
  lunch: { id: number, img: string, name: string, ingredients: string, icons: [string], price: number }[] =
    [{
      id: 5,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    }, {
      id: 6,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    },
    {
      id: 7,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    },
    {
      id: 8,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    }
    ]
  dinner: { id: number, img: string, name: string, ingredients: string, icons: [string], price: number }[] =
    [{
      id: 9,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    }, {
      id: 10,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    },
    {
      id: 11,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    },
    {
      id: 12,
      img: '../../../assets/photos/rectangle@2x.png',
      name: 'Pad Ki Mao',
      ingredients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic, Chili Brown Coconut",
      icons: ['spicy'],
      price: 88
    }
    ]

  showPopup: boolean = false
  dishDetails:{} 

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }

  scroll(category: string) {
    this._elementRef.nativeElement.querySelector(`#${category}`).scrollIntoView()
  }

  PopupStateChange(dish = '') {
    this.dishDetails = dish
    this.showPopup = !this.showPopup
  }

}
