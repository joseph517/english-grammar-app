import { Component, signal, computed } from '@angular/core';
import { TOPICS } from '../../shared/data/topics.data';
import { GrammarTableComponent } from '../../shared/components/grammar-table/grammar-table.component';
import { IrregularVerb, Topic } from '../../core/models/topic.model';
import { AppPaginationComponent } from '../../shared/app-pagination/app-pagination.component';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [GrammarTableComponent, AppPaginationComponent],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.scss',
  host: {
    '[style.--topic-color]': 'topic.color'
  }
})
export class VocabularyComponent {
  topic: Topic = TOPICS.find(t => t.id === 'vocabulary')!;

  searchTerm = signal<string>('');
  currentPage = signal<number>(1);
  pageSize = signal<number>(5);

  private allVerbs: IrregularVerb[] =
    this.topic.sections[1].irregularVerbs ?? [];

  filteredVerbs = computed<IrregularVerb[]>(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.allVerbs;

    return this.allVerbs.filter(verb =>
    verb.base.toLowerCase().startsWith(term)
    );
  });

  paginatedVerbs = computed<IrregularVerb[]>(() => {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    const endIndex = startIndex + this.pageSize();
    return this.filteredVerbs().slice(startIndex, endIndex);
  });

  handlePageChange(page: number ): void {
    this.currentPage.set(page);
  }



  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }
}