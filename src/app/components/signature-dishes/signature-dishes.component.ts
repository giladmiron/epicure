import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature-dishes',
  templateUrl: './signature-dishes.component.html',
  styleUrls: ['./signature-dishes.component.scss']
})
export class SignatureDishesComponent implements OnInit {

  constructor() { }
  signatureDishes: { id: number, img: string, resName: string, dishName: string, ingradients: string, price: number, icons: [string] }[] = [
    {
      id: 1,
      img: "../../../assets/photos/rectangle@2x.png",
      resName: "Tiger Lilly",
      dishName: "Pad Ki Mao",
      ingradients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      price: 88,
      icons: ['spicy']
    },
    {
      id: 2,
      img: "../../../assets/photos/rectangle@2x.png",
      resName: "Tiger Lilly",
      dishName: "Pad Ki Mao",
      ingradients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      price: 88,
      icons: ['spicy']
    }, {
      id: 3,
      img: "../../../assets/photos/rectangle@2x.png",
      resName: "Tiger Lilly",
      dishName: "Pad Ki Mao",
      ingradients: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      price: 88,
      icons: ['spicy']
    },
  ]

  ngOnInit() {
  }

}
