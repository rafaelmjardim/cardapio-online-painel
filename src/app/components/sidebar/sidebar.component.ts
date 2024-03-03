import { Component, OnInit } from '@angular/core';
import { menuItem } from './sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList!: menuItem[];

  ngOnInit(): void {
    this.initMenuList();
  }

  initMenuList = () => {
    this.menuList = [
      {
        name: 'home',
        icon: ''
      },
    ]
  }
}
