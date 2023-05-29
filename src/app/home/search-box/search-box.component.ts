import { ChangeDetectorRef, Component } from '@angular/core';

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
    return [
      {
        id: 0,
        name: 'Derecho Laboral',
        description: 'El derecho laboral es...',
      },
      { id: 1, name: 'Derecho Civil', description: 'El derecho civil es...' },
      { id: 2, name: 'Derecho Penal', description: 'El derecho penal es...' },
    ];
  }
}
