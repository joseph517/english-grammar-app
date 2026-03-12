import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './app-pagination.component.html',
  styleUrl: './app-pagination.component.scss'
})
export class AppPaginationComponent {

  currentPage = input.required<number>();
  pageSize = input.required<number>();
  totalItems = input.required<number>();
  pageChange = output<number>();

  totalPages = computed(() => {
    return Math.ceil(this.totalItems() / this.pageSize());
  })
  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }
}