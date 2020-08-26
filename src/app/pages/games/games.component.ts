import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {MenuService} from '../../services/menu.service';
import {GameState} from '../../store/game.state';
import {GetFilteredGameList, GetGamesList, GetSearchedGameList} from '../../store/games.actions';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {
  filter: Array<any>;
  search: string;
  genreType: string;

  @Select(GameState.getGames)
  list$;

  constructor(private store: Store, private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getFilter().subscribe(data => {
      this.filter = data;
    });

    this.store.dispatch(new GetGamesList());
  }

  selectedGenre(e: string) {
    this.genreType = e;
    this.store.dispatch(new GetFilteredGameList(e));
  }

  selectedWord(e: string) {
    this.store.dispatch(new GetSearchedGameList(e));
  }
}
