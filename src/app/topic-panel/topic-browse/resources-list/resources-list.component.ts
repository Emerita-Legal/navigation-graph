import { Component } from '@angular/core';
import { Resource } from './resource-item/resource';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css'],
})
export class ResourcesListComponent {
  resources: Resource[] = [
    {
      title: 'Pablo Luis Vázquez García',
      type: 'Abogado',
      country: 'España',
      image:
        'https://www.emerita.legal/assets/images/profiles/195549-1529919093-profile.jpg',
      href: 'https://www.emerita.legal',
    },
    {
      title: 'Juzgados de lo Social de A Coruña',
      type: 'Órgano Judicial',
      country: 'España',
      image:
        'https://media.istockphoto.com/id/1145896663/es/vector/icono-del-juzgado.jpg?s=170667a&w=0&k=20&c=clTlTtAnRdR9a08jWKoFfmgglVFl0eZTrJBqG3aO27U=',
      href: 'https://www.emerita.legal',
    },
  ];
}
