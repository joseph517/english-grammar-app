import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-verb-infinitive',
  imports: [GrammarTableComponent],
  templateUrl: './verb-infinitive.component.html',
  styleUrl: './verb-infinitive.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class VerbInfinitiveComponent {

  topic = TOPICS.find(topic => topic.id === 'verb-infinitive');

}
