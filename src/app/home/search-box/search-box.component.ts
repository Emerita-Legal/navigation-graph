import { ChangeDetectorRef, Component } from '@angular/core';
import { topics } from '../../topic-panel/data/topics';

type SearchBoxNode = {
  id: number;
  name: string;
  description: string;
};

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  selectedNode: Event | null = null;
  nodes: SearchBoxNode[] = [];
  filteredNodes: SearchBoxNode[] = [];

  constructor() {
    this.nodes = this.loadNodes();
  }

  filterNodes($event: { query: string }): void {
    const regexp = new RegExp(`^.*${$event.query.toLowerCase()}.*$`);
    this.filteredNodes = this.nodes.filter((node) =>
      regexp.test(node.name.toLowerCase())
    );
  }

  loadNodes(): SearchBoxNode[] {
    return topics
      .filter((topic) => topic.isCentral)
      .map((topic) => ({
        ...topic,
        description: topic.description.slice(0, 80) + '...',
      }));
  }
}
