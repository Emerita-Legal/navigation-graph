import { Component, Input } from '@angular/core';
import { Resource, ResourceTypes } from '../../../_types/topic';

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
    url: '',
  };

  resourceTypes = ResourceTypes;

  goto(link?: string) {
    if (link) {
      window.open(link, '__blank');
    }
  }

  getResourceBorder() {
    switch (this.resource.type) {
      case ResourceTypes.Lawyer:
        return '1px solid #dee2e6';
      case ResourceTypes.Court:
        return '5px solid #ADD8E6';
      case ResourceTypes.Article:
        return '5px solid #B9A0FF';
      case ResourceTypes.Law:
      case ResourceTypes.Sentence:
        return '5px solid #00D1FF';
      case ResourceTypes.Template:
        return '5px solid #FFCCA2';
      default:
        return '5px solid #FFCCA2';
    }
  }
}
