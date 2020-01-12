import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dish-popup',
  templateUrl: './dish-popup.component.html',
  styleUrls: ['./dish-popup.component.scss']
})
export class DishPopupComponent implements OnInit {

  constructor() { }

  @Input() dishDetails: {}
  @Output() hidePopup = new EventEmitter()

  ngOnInit() {
    console.log(this.dishDetails)
  }

  hideWindow() {
    this.hidePopup.emit()
  }

}
