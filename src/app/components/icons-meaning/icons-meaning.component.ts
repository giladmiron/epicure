import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-meaning',
  templateUrl: './icons-meaning.component.html',
  styleUrls: ['./icons-meaning.component.scss']
})
export class IconsMeaningComponent implements OnInit {

  icons = [{
    class: 'spicy-icon',
    src: '../../../assets/icons/group-2.svg',
    content: 'SPICY'
  }, {
    class: 'vegiterian-icon',
    src: '../../../assets/icons/vegiterian-icon.svg',
    content: 'VEGITARIAN'
  }, {
    class: 'spicy-icon',
    src: '../../../assets/icons/group-2.svg',
    content: 'VEGAN',
  }]

  constructor() { }

  ngOnInit() {
  }

}
