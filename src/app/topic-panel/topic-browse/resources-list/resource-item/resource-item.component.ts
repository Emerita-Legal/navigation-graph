import { Component, Input } from '@angular/core';
import { Resource, ResourceTypes } from './resource';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css'],
})
export class ResourceItemComponent {
  @Input() resource: Resource = {
    title: '',
    subtitle: '',
    image: '',
    country: '',
    type: ResourceTypes.Lawyer,
    href: '',
  };

  goto(link: string) {
    window.open(link, '__blank');
  }

  getResourceBorder() {
    switch (this.resource.type) {
      case ResourceTypes.Lawyer:
        return '5px solid #0f1820';
      case ResourceTypes.Court:
        return '5px solid #ADD8E6';
      case ResourceTypes.Article:
        return '5px solid #ff8b22';
      case ResourceTypes.Law:
      case ResourceTypes.Sentence:
        return '5px solid #00ccb1';
      case ResourceTypes.Template:
        return '5px solid #ff8b22';
      default:
        return '5px solid #ff8b22';
    }
  }
}
