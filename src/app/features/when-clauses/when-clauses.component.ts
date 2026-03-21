import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-when-clauses',
  imports: [GrammarTableComponent],
  templateUrl: './when-clauses.component.html',
  styleUrl: './when-clauses.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class WhenClausesComponent {

  topic = TOPICS.find(topic => topic.id === 'when-clauses');

}
