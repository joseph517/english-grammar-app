import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-nouns',
  imports: [GrammarTableComponent],
  templateUrl: './nouns.component.html',
  styleUrl: './nouns.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class NounsComponent {

  topic = TOPICS.find(topic => topic.id === 'nouns')

}
