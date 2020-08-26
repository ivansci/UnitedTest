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

  filter = [
    {
      type: 'Christmas Slots',
      value: '101'
    },
    {
      type: 'Mini Games',
      value: '52'
    },
    {
      type: 'New',
      value: '65'
    },
    {
      type: 'Live Dealer',
      value: '28'
    },
    {
      type: 'Popular Games',
      value: '95'
    },
    {
      type: 'Skill Games',
      value: '36'
    },
    {
      type: 'Top Slots',
      value: '93'
    },
    {
      type: 'Video Slots',
      value: '51'
    },
    {
      type: 'Video Poker',
      value: '40'
    }
  ];

  getMenu(): Observable<Array<any>> {
    return of(this.menu);
  }

  getFilter(): Observable<Array<any>> {
    return of(this.filter);
  }
}
