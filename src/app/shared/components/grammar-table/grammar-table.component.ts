import { Component, input } from '@angular/core';
import { TableData } from '../../../core/models/topic.model';

@Component({
  selector: 'app-grammar-table',
  imports: [],
  templateUrl: './grammar-table.component.html',
  styleUrl: './grammar-table.component.scss'
})
export class GrammarTableComponent {

  data = input<TableData>({
    headers: [],
    rows: []
  });

}
