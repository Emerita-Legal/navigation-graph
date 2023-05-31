import { Resource, ResourceTypes, Topic } from '../_types/topic';
const profiles: Resource[] = [
  {
    title: 'Pablo Luis Vázquez García',
    subtitle: 'Abogado',
    type: ResourceTypes.Lawyer,
    country: 'España',
    image:
      'https://www.emerita.legal/assets/images/profiles/195549-1529919093-profile.jpg',
    url: 'https://www.emerita.legal',
  },
  {
    title: 'Juzgados de lo Social de A Coruña',
    type: ResourceTypes.Court,
    subtitle: 'Órgano Judicial',
    country: 'España',
    image:
      'https://media.istockphoto.com/id/1145896663/es/vector/icono-del-juzgado.jpg?s=170667a&w=0&k=20&c=clTlTtAnRdR9a08jWKoFfmgglVFl0eZTrJBqG3aO27U=',
    url: 'https://www.emerita.legal',
  },
];
const laws: Resource[] = [
  {
    title: 'Artículo 54 - Despido disciplinario',
    type: ResourceTypes.Law,
    subtitle: 'Estatuto de los trabajadores',
    country: 'España',
    image:
      'https://e7.pngegg.com/pngimages/661/185/png-clipart-contract-legal-instrument-document-computer-icons-law-recycle-bin-miscellaneous-angle.png',
    url: 'https://www.emerita.legal',
  },
  {
    title: 'Resolución 1232/22 del Juzgado de lo Social de A Coruña',
    subtitle: 'Resoluciones - 1ª instancia',
    type: ResourceTypes.Sentence,
    country: 'España',
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/006/692/271/small/document-icon-template-black-color-editable-document-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg',
    url: 'https://www.emerita.legal',
  },
];
const related: Resource[] = [
  {
    title: 'Formulario de demanda para despido disciplinario',
    subtitle: 'Plantillas demandante',
    type: ResourceTypes.Template,
    country: 'España',
    image:
      'https://static.vecteezy.com/system/resources/previews/000/378/595/original/template-vector-icon.jpg',
    url: 'https://www.emerita.legal',
  },
  {
    title:
      'Formulario de demanda para la fase de pruebas de despido disciplinario',
    subtitle: 'Plantillas demandante',
    type: ResourceTypes.Template,
    country: 'España',
    image:
      'https://static.vecteezy.com/system/resources/previews/000/378/595/original/template-vector-icon.jpg',
    url: 'https://www.emerita.legal',
  },
];


export const topics: Array<Topic> = [
  {
    id: 1,
    name: 'DERECHO LABORAL',
    isCentral: true,
    title: 'DERECHO LABORAL',
    image:
      'https://imageproxy-prod.ent.sdy.ai/v1/image/1500x/https://fws.weforum.org/images/topics/a1Gb0000000pTDZEA2/standard',
    description:
      'El derecho laboral es una especialidad que busca proteger a los trabajadores y regular la contratación por parte de las empresas. Las reclamaciones de salarios, los despidos, las indemnizaciones… son de las materias más discutidas en esta rama de derecho',
    publications: [
      {
        id: 1,
        title:
          '¿Cuánto se tarda en cobrar una indemnización por accidente laboral?',
        image:
          'https://www.emerita.legal/blog/wp-content/uploads/2023/05/indemnizacion-accidente-laboral.jpg',
        url: 'https://www.emerita.legal/blog/laboral/cobrar-indemnizacion-accidente-laboral-https-www-emerita-legal-abogado-santiago-diez-martinez-141050/',
        snippet:
          'Indemnización por accidente laboral: ¿Qué es una indemnización laboral? ¿Qué tipo de indemnización/prestaciones puedes reclamar tras sufrir un accidente laboral? ¿Qué pasa si el seguro no se pone en contacto conmigo? Ejemplos de casos en cobros de indemnización por accidente laboral. Estas son algunas de las preguntas que más se buscan en relación a esta casuística y el abogado Santiago Diez Martínez, te da la respuesta y ofrece su asistencia.',
      },
      {
        id: 2,
        title: 'Redactar una carta de despido improcedente. Actualizado 2023',
        image:
          'https://www.emerita.legal/blog/wp-content/uploads/2023/04/Redactar-una-carta-de-despido-improcedente-Actualizado-2023.jpg',
        url: 'https://www.emerita.legal/blog/laboral/redactar-una-carta-de-despido-improcedente-actualizado-2023-73129/',
        snippet:
          '¿Qué implica que la empresa admita la improcedencia del despido? Proceso de envío y recepción de la carta de despido. ¿Qué elementos deben figurar si o si en la carta de despido improcedente? Consejos para redactar la carta de despido. Modelo de redacción de carta de despido. ¿Qué pasa si la carta de despido tiene errores? Ejemplos de casos de errores en la carta de despido improcedente. Estas son algunas de las preguntas más buscadas en internet durante el último mes. Por ello, le hemos pedido al abogado experto en derecho del trabajo, Joaquín Sánchez, que les dé respuesta. A continuación todos los detalles.',
      },
      {
        id: 3,
        title: 'Extinción del contrato de trabajo por parte del trabajador',
        image:
          'https://www.emerita.legal/blog/wp-content/uploads/2023/04/Extincion-del-contrato-de-trabajo-por-parte-del-trabajador.jpg',
        url: 'https://www.emerita.legal/blog/laboral/extincion-contrato-trabajo-trabajador-73129/',
        snippet:
          'Causas de la extinción del contrato de trabajo por parte del trabajador. ¿Cómo solicitar la extinción del contrato de trabajo por parte del trabajador? ¿Cuándo puede un trabajador solicitar la extinción del contrato y cobrar indemnización? ¿Qué consecuencias tiene la extinción del contrato de trabajo por parte del trabajador? Ejemplos de casos de extinción del contrato de trabajo por parte del trabajador. Estas son algunas de las preguntas más buscadas en internet durante el último mes. Por ello, le hemos pedido al abogado experto en derecho del trabajo, Joaquín Sánchez, que les dé respuesta. A continuación todos los detalles.',
      },
    ],
    childs: [
      {
        id: 2,
        name: 'DERECHOS',
        title: 'DERECHOS',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 20,
            name: 'DERECHOS DE LOS EMPLEADORES',
            title: 'DERECHOS DE LOS EMPLEADORES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          ,
          {
            id: 21,
            name: 'DERECHOS DE LOS EMPLEADOS',
            title: 'DERECHOS DE LOS EMPLEADOS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          ,
          {
            id: 22,
            name: 'DERECHOS DE LOS AUTÓNOMOS',
            title: 'DERECHOS DE LOS AUTÓNOMOS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          ,
          {
            id: 23,
            name: 'DERECHOS DE LOS TRABAJADORES INTERNACIONALES',
            title: 'DERECHOS DE LOS TRABAJADORES INTERNACIONALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          ,
          {
            id: 24,
            name: 'DERECHOS EN CASO DE DISCRIMINACIÓN O ACOSO LABORAL',
            title: 'DERECHOS EN CASO DE DISCRIMINACIÓN O ACOSO LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ] as Topic[],
      },
      {
        id: 3,
        name: 'MATERIAS',
        title: 'MATERIAS',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 30,
            name: 'DERECHO DEL CONFLICTO LABORAL',
            title: 'DERECHO DEL CONFLICTO LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 31,
            name: 'DERECHO DE LA CONTRATACIÓN LABORAL',
            title: 'DERECHO DE LA CONTRATACIÓN LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 32,
            name: 'DERECHO COLECTIVO DEL TRABAJOLA',
            title: 'DERECHO COLECTIVO DEL TRABAJOLA',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 33,
            name: 'DERECHO SINDICAL Y PATRONAL',
            title: 'DERECHO SINDICAL Y PATRONAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 34,
            name: 'DERECHO DE LA NEGOCIACIÓN COLECTIVA',
            title: 'DERECHO DE LA NEGOCIACIÓN COLECTIVA',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 35,
            name: 'DERECHO DE LA PREVENCIÓN DE RIESGOS LABORALES',
            title: 'DERECHO DE LA PREVENCIÓN DE RIESGOS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 36,
            name: 'DERECHO ARBITRAL',
            title: 'DERECHO ARBITRAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ],
      },
      {
        id: 4,
        name: 'LEGISLACIÓN',
        title: 'LEGISLACIÓN',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 40,
            name: 'ESTATUTO DE LOS TRABAJADORES',
            title: 'ESTATUTO DE LOS TRABAJADORES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 41,
            name: 'CONSTITUCIÓN ESPAÑOLA',
            title: 'CONSTITUCIÓN ESPAÑOLA',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 42,
            name: 'LEY DE PREVENCIÓN DE RIESGOS LABORALES',
            title: 'LEY DE PREVENCIÓN DE RIESGOS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 43,
            name: 'LEY ORGÁNICA DE LIBERTAD SINDICAL',
            title: 'LEY ORGÁNICA DE LIBERTAD SINDICAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 44,
            name: 'LEY SOBRE INFRACCIONES Y SANCIONES DEL ORDEN SOCIAL',
            title: 'LEY SOBRE INFRACCIONES Y SANCIONES DEL ORDEN SOCIAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 45,
            name: 'CONVENIOS COLECTIVOS',
            title: 'CONVENIOS COLECTIVOS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 46,
            name: 'LEY DE EMPLEO',
            title: 'LEY DE EMPLEO',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ],
      },
      {
        id: 5,
        name: 'SERVICIOS',
        title: 'SERVICIOS',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 50,
            name: 'ABOGADOS LABORALISTAS',
            title: 'ABOGADOS LABORALISTAS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 51,
            name: 'DESPACHOS LABORALISTAS',
            title: 'DESPACHOS LABORALISTAS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 52,
            name: 'RANKING ABOGADOS LABORALISTAS',
            title: 'RANKING ABOGADOS LABORALISTAS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 53,
            name: 'RANKING DESPACHOS LABORALISTAS',
            title: 'RANKING DESPACHOS LABORALISTAS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 55,
            name: 'FAQ PREGUNTAS FRECUENTES',
            title: 'FAQ PREGUNTAS FRECUENTES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 51234,
            name: 'ASESORAIMIENTO LABORAL',
            title: 'ASESORAIMIENTO LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 56,
            name: 'REPRESENTACIÓN EN JUICIOS LABORALES',
            title: 'REPRESENTACIÓN EN JUICIOS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 57,
            name: 'MEDIACIÓN LABORAL',
            title: 'MEDIACIÓN LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 58,
            name: 'ARBITRAJE LABORAL',
            title: 'ARBITRAJE LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 59,
            name: 'JUICIOS Y APELACIONES LABORALES',
            title: 'JUICIOS Y APELACIONES LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 550,
            name: 'CONSULTAS LABORALES',
            title: 'CONSULTAS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 551,
            name: 'REVISIÓN DE DOCIMENTOS LABORALES',
            title: 'REVISIÓN DE DOCIMENTOS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 552,
            name: 'ASESORAMIENTO EN CUMPLIMIENTO NORMATIVO',
            title: 'ASESORAMIENTO EN CUMPLIMIENTO NORMATIVO',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 553,
            name: 'ASESORAMIENTO EN RELACIONES LABORALES INTERNACIONALES',
            title: 'ASESORAMIENTO EN RELACIONES LABORALES INTERNACIONALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ],
      },
      {
        id: 6,
        name: 'PROCEDIMIENTOS',
        title: 'PROCEDIMIENTOS',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 60,
            name: 'RECLAMACIONES LABORALES',
            title: 'RECLAMACIONES LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 61,
            name: 'JUICIOS LABORALES',
            title: 'JUICIOS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 62,
            name: 'APELACIÓN LABORAL',
            title: 'APELACIÓN LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 63,
            name: 'CONCILIACIÓN LABORAL',
            title: 'CONCILIACIÓN LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 66,
            name: 'MEDIACIÓN LABORAL',
            title: 'MEDIACIÓN LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 65,
            name: 'ARBITRAJE LABORAL',
            title: 'ARBITRAJE LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ],
      },
      {
        id: 7,
        name: 'DOCUMENTACIÓN',
        title: 'DOCUMENTACIÓN',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 70,
            name: 'CONTRATOS DE TRABAJO',
            title: 'CONTRATOS DE TRABAJO',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 71,
            name: 'CARTAS DE DESPIDO',
            title: 'CARTAS DE DESPIDO',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 72,
            name: 'ACUERDOS LABORALES',
            title: 'ACUERDOS LABORALES',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 73,
            name: 'DOCUMENTACIÓN LEGAL LABORAL',
            title: 'DOCUMENTACIÓN LEGAL LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 77,
            name: 'SENTENCIAS',
            title: 'SENTENCIAS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 75,
            name: 'DOCTRINA Y JURISPUDENCIA',
            title: 'DOCTRINA Y JURISPUDENCIA',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ],
      },
      {
        id: 8,
        name: 'CASOS',
        title: 'CASOS',
        description: 'lorem ipsum',
        isCentral: false,
        childs: [
          {
            id: 80,
            name: 'CASOS LABORALES RESUELTOS',
            title: 'CASOS LABORALES RESUELTOS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 81,
            name: 'CASOS LABORALES EN CURSO',
            title: 'CASOS LABORALES EN CURSO',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 82,
            name: 'ESTUDIOS DE CASOS',
            title: 'ESTUDIOS DE CASOS',
            description: 'lorem ipsum',
            isCentral: false,
          },
          {
            id: 83,
            name: 'GLOSARIO LEGAL LABORAL',
            title: 'GLOSARIO LEGAL LABORAL',
            description: 'lorem ipsum',
            isCentral: false,
          },
        ],
      },
    ],
    // profiles,
    // laws,
    // related
  },
];


