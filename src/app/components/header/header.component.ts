import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import { faBars, faCarrot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  })
export class HeaderComponent implements OnInit {
  status = false;
  menu: Array<any>;
  faCarrot = faCarrot;
  faBars = faBars;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

  toggle() {
    this.status = !this.status;
  }
}
