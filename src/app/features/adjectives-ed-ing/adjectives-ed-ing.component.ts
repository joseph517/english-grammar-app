import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-adjectives-ed-ing',
  imports: [GrammarTableComponent],
  templateUrl: './adjectives-ed-ing.component.html',
  styleUrl: './adjectives-ed-ing.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class AdjectivesEdIngComponent {

  topic = TOPICS.find(t => t.id === 'adjectives-ed-ing');

}
