import { Component } from '@angular/core';
import {
  Resource,
  ResourceTypes,
} from './resources-list/resource-item/resource';

@Component({
  selector: 'app-topic-browse',
  templateUrl: './topic-browse.component.html',
  styleUrls: ['./topic-browse.component.css'],
})
export class TopicBrowseComponent {
  profiles: Resource[] = [
    {
      title: 'Pablo Luis Vázquez García',
      subtitle: 'Abogado',
      type: ResourceTypes.Lawyer,
      country: 'España',
      image:
        'https://www.emerita.legal/assets/images/profiles/195549-1529919093-profile.jpg',
      href: 'https://www.emerita.legal',
    },
    {
      title: 'Juzgados de lo Social de A Coruña',
      type: ResourceTypes.Court,
      subtitle: 'Órgano Judicial',
      country: 'España',
      image:
        'https://media.istockphoto.com/id/1145896663/es/vector/icono-del-juzgado.jpg?s=170667a&w=0&k=20&c=clTlTtAnRdR9a08jWKoFfmgglVFl0eZTrJBqG3aO27U=',
      href: 'https://www.emerita.legal',
    },
  ];
  laws: Resource[] = [
    {
      title: 'Artículo 54 - Despido disciplinario',
      type: ResourceTypes.Law,
      subtitle: 'Estatuto de los trabajadores',
      country: 'España',
      image:
        'https://e7.pngegg.com/pngimages/661/185/png-clipart-contract-legal-instrument-document-computer-icons-law-recycle-bin-miscellaneous-angle.png',
      href: 'https://www.emerita.legal',
    },
    {
      title: 'Resolución 1232/22 del Juzgado de lo Social de A Coruña',
      subtitle: 'Resoluciones - 1ª instancia',
      type: ResourceTypes.Sentence,
      country: 'España',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/006/692/271/small/document-icon-template-black-color-editable-document-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg',
      href: 'https://www.emerita.legal',
    },
  ];
  related: Resource[] = [
    {
      title: 'Formulario de demanda para despido disciplinario',
      subtitle: 'Plantillas demandante',
      type: ResourceTypes.Template,
      country: 'España',
      image:
        'https://static.vecteezy.com/system/resources/previews/000/378/595/original/template-vector-icon.jpg',
      href: 'https://www.emerita.legal',
    },
    {
      title:
        'Formulario de demanda para la fase de pruebas de despido disciplinario',
      subtitle: 'Plantillas demandante',
      type: ResourceTypes.Template,
      country: 'España',
      image:
        'https://static.vecteezy.com/system/resources/previews/000/378/595/original/template-vector-icon.jpg',
      href: 'https://www.emerita.legal',
    },
  ];
}
