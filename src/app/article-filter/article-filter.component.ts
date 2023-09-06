import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.css'],
  providers:[{provide:MatFormFieldControl, useExisting:ArticleFilterComponent}]
})
export class ArticleFilterComponent {
  filteredText:string = "";

  @Output() filteredTextChange = new EventEmitter<string>;

  applyFilter(){
    this.filteredTextChange.emit(this.filteredText)
  }
}
