import { Component, OnInit } from '@angular/core';
import { ICONS } from '../../constants/icon-constans';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  iconCart: any = ICONS.shopping_cart;
  iconMenu: any = ICONS.menu;
  isMenuShown: boolean = false;
  isOpened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuShown = !this.isMenuShown;
  }
  toggleCart() {
    console.log('entre');

    this.isOpened = !this.isOpened;
  }
}
