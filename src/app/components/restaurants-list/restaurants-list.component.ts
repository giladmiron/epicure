import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {

  constructor() { }

  @Input() listToDisplay:{ id: number, img: string, name: string, chef: string }[] 

  ngOnInit() {
  }

}

