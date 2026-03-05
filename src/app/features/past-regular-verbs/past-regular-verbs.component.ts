import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';
@Component({
  selector: 'app-past-regular-verbs',
  imports: [GrammarTableComponent],
  templateUrl: './past-regular-verbs.component.html',
  styleUrl: './past-regular-verbs.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class PastRegularVerbsComponent {

  topic = TOPICS.find(topic => topic.id === 'simple-past-regular-verbs')

}
