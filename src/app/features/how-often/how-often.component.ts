import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-how-often',
  imports: [GrammarTableComponent],
  templateUrl: './how-often.component.html',
  styleUrl: './how-often.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class HowOftenComponent {

  topic = TOPICS.find((t) => t.id === 'how-often');

}
