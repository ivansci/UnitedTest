import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menu = [
    {
      name: 'Home',
      link: '/home'
    },
    {
      name: 'Games',
      link: '/games'
    }
  ];

  getMenu(): Observable<Array<any>> {
    return of(this.menu);
  }
}
