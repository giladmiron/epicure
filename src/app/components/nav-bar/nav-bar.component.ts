import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  menuHide: boolean = true

  ngOnInit() {
  }

  menuStateChange() {
    this.menuHide = !this.menuHide
  }

}
