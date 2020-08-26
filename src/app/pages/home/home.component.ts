import { Component, OnInit } from '@angular/core';
import {GameState} from '../../store/game.state';
import {Select, Store} from '@ngxs/store';
import { GetGamesList } from '../../store/games.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @Select(GameState.getTopGames)
  list$;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetGamesList());
  }

}
