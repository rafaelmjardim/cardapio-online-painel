import { Component, OnInit } from '@angular/core';
import { menuItem } from './sidebar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList!: menuItem[];
  currentPage!: any;

  constructor (
    public location: Location
  ) {}

  ngOnInit(): void {
    this.initMenuList();    
  }

  initMenuList = () => {
    this.menuList = [
      {
        name: 'Home',
        icon: 'Home',
        rota: '',
      },
      {
        name: 'Produtos',
        icon: 'PackageSearch',
        rota: '/produtos',
      },
      {
        name: 'Pedidos',
        icon: 'ShoppingCart',
        rota: '/pedidos',
      },
    ]
  }
}
