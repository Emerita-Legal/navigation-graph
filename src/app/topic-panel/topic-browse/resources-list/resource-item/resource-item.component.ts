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
}
