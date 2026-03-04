import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-prepotitions',
  imports: [GrammarTableComponent],
  templateUrl: './prepositions.component.html',
  styleUrl: './prepositions.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class PrepotitionsComponent {

  topic = TOPICS.find(topic => topic.id === 'prepositions')

}
