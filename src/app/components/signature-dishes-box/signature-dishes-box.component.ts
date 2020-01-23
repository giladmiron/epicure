import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signature-dishes-box',
  templateUrl: './signature-dishes-box.component.html',
  styleUrls: ['./signature-dishes-box.component.scss']
})
export class SignatureDishesBoxComponent implements OnInit {

  @Input() data;
  signatureDishes: { id: number, img: string, resName: string, dishName: string, ingredients: string, price: number, icons: [string] }[] = []

  constructor() { }

  ngOnInit() {
    this.signatureDishes = this.data
  }
}
