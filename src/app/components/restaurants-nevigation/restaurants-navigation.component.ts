import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-navigation',
  templateUrl: './restaurants-navigation.component.html',
  styleUrls: ['./restaurants-navigation.component.scss']
})
export class RestaurantsNavigationComponent implements OnInit {

  navState: {} = {
    All: true,
    New: false,
    MostPopular: false,
    OpenNow: false
  }

  listToDisplay: { id: number, img: string, name: string, chef: string }[] = [
    {
      id: 1,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 2,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "bla",
      chef: "Ran Shmueli"
    },
    {
      id: 3,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 4,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 5,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 6,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 7,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 8,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 9,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 10,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 11,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
    {
      id: 12,
      img: "../../../assets/photos/claro@2x.jpg",
      name: "Claro",
      chef: "Ran Shmueli"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  changeList(event: any) {
    let term = event.target.innerHTML.trim().replace(" ", "")
    let newNavState = {
      All: false,
      New: false,
      MostPopular: false,
      OpenNow: false
    }
    newNavState[term] = true
    this.navState = newNavState
  }

}
