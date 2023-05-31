import { Component, Input } from '@angular/core';
import { Resource } from '../../_types/topic';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css'],
})
export class ResourcesListComponent {
  @Input() resources: Resource[] | undefined = [];
}
