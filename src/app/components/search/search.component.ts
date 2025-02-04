import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output()
  outSearch = new EventEmitter<string>();

  sWord(word){
    this.outSearch.emit(word);
  }
}
