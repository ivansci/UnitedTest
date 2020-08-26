import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CasinoService} from '../services/casino.service';
import {GetFilteredGameList, GetGameById, GetGameListFailed, GetGamesList, GetSearchedGameList} from './games.actions';

export class GamesStateModel {
    gameList: Array<any>;
    filter: string;
    search: string;
    id: number;
}

@State<GamesStateModel>({
    name: 'catalog',
    defaults: {
        gameList: [],
        filter: '-1',
        search: null,
        id: null
    }
})

@Injectable()
export class GameState {

    constructor(private casinoService: CasinoService) {
    }

    @Selector()
    static getGames(state: GamesStateModel) {
        if (state.filter !== '-1' && state.search) {
            return state.gameList.filter(g => (g.categories.includes(state.filter) && g.name.toLowerCase().includes(state.search.toLowerCase())));
        } else if ((state.filter !== '-1')) {
            return state.gameList.filter(g => (g.categories.includes(state.filter)));
        } else if (state.search) {
            return state.gameList.filter(g => (g.name.toLowerCase().includes(state.search.toLowerCase())));
        } else {
            return state.gameList;
        }
    }

    @Selector()
    static getTopGames(state: GamesStateModel) {
        // @ts-ignore
        return state.gameList.filter(m => m.active === '1' && m.feats.find(x => x.id === '186'));
    }

    @Selector()
    static getGameById(state: GamesStateModel) {
        return state.gameList.filter(m => m.id === state.id);
    }

    @Action(GetGameById)
    fetchGameById({patchState}: StateContext<GamesStateModel>, {payload}: GetGameById) {
        patchState({id: payload});
    }

    @Action(GetFilteredGameList)
    updateFilter({patchState}: StateContext<GamesStateModel>, {payload}: GetFilteredGameList) {
        patchState({filter: payload});
    }

    @Action(GetSearchedGameList)
    updateSearch({patchState}: StateContext<GamesStateModel>, {payload}: GetSearchedGameList) {
        patchState({search: payload});
    }

    @Action(GetGamesList)
    FetchGames(ctx: StateContext<GamesStateModel>, action: GetGamesList) {
        try {
            const gameList = this.casinoService.getGames();
            const state = ctx.getState();

            ctx.setState({
                ...state,
                gameList
            });
        } catch (error) {
            ctx.dispatch(new GetGameListFailed(error));
        }
    }
}
