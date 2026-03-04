import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-ver-to-be',
  imports: [GrammarTableComponent],
  templateUrl: './ver-to-be.component.html',
  styleUrl: './ver-to-be.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class VerToBeComponent {

  topic = TOPICS.find(topic => topic.id === 'verb-to-be');

}
