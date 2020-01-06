import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() menuStateChange = new EventEmitter()

  constructor() { }
  ngOnInit() {
  }

  hideMenu() {
    this.menuStateChange.emit('hide')
  }

}
