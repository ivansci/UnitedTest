import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

    @Input()
    game: any;

    @Input()
    index: any;

    defaultImage = 'https://i0.wp.com/europeangaming.eu/portal/wp-content/uploads/2020/04/best-casinos-games.jpg?w=1200&ssl=1';

    ngOnInit(): void {
    }

}
