import { Component, Input } from '@angular/core';
import { Resource } from './resource-item/resource';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css'],
})
export class ResourcesListComponent {
  @Input() resources: Resource[] = [];
}
