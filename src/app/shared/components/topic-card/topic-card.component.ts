import { Component, input, output } from '@angular/core';
import { Topic } from '../../../core/models/topic.model';
@Component({
  selector: 'app-topic-card',
  imports: [],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.scss'
})
export class TopicCardComponent {
  
  topic = input.required<Topic>();
  isActive = input<boolean>(false);
  selected = output<Topic>();

}
