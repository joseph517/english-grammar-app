import { Component } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';

@Component({
  selector: 'app-like-would-like',
  imports: [GrammarTableComponent],
  templateUrl: './like-would-like.component.html',
  styleUrl: './like-would-like.component.scss',
  host: {
    '[style.--topic-color]': 'topic?.color'
  }
})
export class LikeWouldLikeComponent {

  topic = TOPICS.find(topic => topic.id === 'like-would-like');

}
