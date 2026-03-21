import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-imperative',
  imports: [GrammarTableComponent],
  templateUrl: './imperative.component.html',
  styleUrl: './imperative.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class ImperativeComponent {

  topic = TOPICS.find(topic => topic.id === 'imperatives');

}
