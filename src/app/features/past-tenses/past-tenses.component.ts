import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-past-tenses',
  imports: [GrammarTableComponent],
  templateUrl: './past-tenses.component.html',
  styleUrl: './past-tenses.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class PastTensesComponent {

  topic = TOPICS.find(topic => topic.id === 'simple-past-irregular-verbs')

}
