import { Component, inject, signal, computed } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TOPICS } from './shared/data/topics.data';
import { TopicCardComponent } from './shared/components/topic-card/topic-card.component';
import { Topic } from './core/models/topic.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopicCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);

  topics = TOPICS;
  activeRoute = signal<string>('/verb-to-be');
  sidebarOpen = signal<boolean>(false);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.activeRoute.set(e.urlAfterRedirects);
        // Cierra sidebar en mobile al navegar
        this.sidebarOpen.set(false);
      });
  }

  isActive = (topic: Topic): boolean =>
    this.activeRoute().includes(topic.id);

  navigate(topic: Topic): void {
    this.router.navigate([topic.route]);
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}