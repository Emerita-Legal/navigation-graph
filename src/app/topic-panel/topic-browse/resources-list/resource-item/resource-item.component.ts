import { Component, Input } from '@angular/core';
import { Resource } from './resource';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css'],
})
export class ResourceItemComponent {
  @Input() resource: Resource = {
    title: '',
    image: '',
    country: '',
    type: '',
    href: '',
  };

  goto(link: string) {
    window.open(link, '__blank');
  }

  getResourceBorder() {
    switch (this.resource.type) {
      case 'Abogado':
        return '5px solid orange';
      case 'Órgano Judicial':
        return '5px solid #ADD8E6';
      default:
        return '5px solid orange';
    }
  }
}
