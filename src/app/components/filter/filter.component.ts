import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input()
  filter: Array<any>;

  @Output()
  category = new EventEmitter<string>();

  selectedType(e) {
    this.category.emit(e);
  }
}
