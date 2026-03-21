import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-can-could',
  imports: [GrammarTableComponent],
  templateUrl: './can-could.component.html',
  styleUrl: './can-could.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class CanCouldComponent {

  topic = TOPICS.find(topic => topic.id === 'can-could');

}
