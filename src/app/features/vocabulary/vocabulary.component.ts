import { Component, signal, computed } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';
import { IrregularVerb, Topic } from '../../core/models/topic.model';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [GrammarTableComponent],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
  host: {
    '[style.--topic-color]': 'topic.color'
  }
})
export class VocabularyComponent {
  topic: Topic = TOPICS.find(t => t.id === 'vocabulary')!;

  searchTerm = signal<string>('');

  // Todos los verbos del modelo
  private allVerbs: IrregularVerb[] =
    this.topic.sections[1].irregularVerbs ?? [];

  // Filtra según el searchTerm signal
  filteredVerbs = computed<IrregularVerb[]>(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.allVerbs;

    return this.allVerbs.filter(verb =>
    verb.base.toLowerCase().startsWith(term)
    );
  });

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }
}