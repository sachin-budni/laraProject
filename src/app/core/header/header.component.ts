import { Component, OnInit } from '@angular/core';
import { MenuModel } from '../../model/menu-Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus: Array<MenuModel> = [];
  constructor() {
    let menu1 = new MenuModel("Home","google.com");
    let menu2 = new MenuModel("Aboutus","google.com");
    let menu3 = new MenuModel("Contactus","google.com");
    let menu4 = new MenuModel("Batches","google.com");
    let menu5 = new MenuModel("Projects","google.com");
    this.menus.push(menu1);
    this.menus.push(menu2);
    this.menus.push(menu3);
    this.menus.push(menu4);
    this.menus.push(menu5);
   }
  ngOnInit() {
  }

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

}
