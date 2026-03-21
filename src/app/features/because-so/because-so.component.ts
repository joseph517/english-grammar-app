import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-because-so',
  imports: [GrammarTableComponent],
  templateUrl: './because-so.component.html',
  styleUrl: './because-so.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class BecauseSoComponent {

  topic = TOPICS.find(topic => topic.id === 'because-so');

}
