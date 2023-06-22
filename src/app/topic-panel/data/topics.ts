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
    image: '../../../assets/court.svg',
    url: 'https://www.emerita.legal',
  },
];
const laws: Resource[] = [
  {
    title: 'Artículo 54 - Despido disciplinario',
    type: ResourceTypes.Article,
    subtitle: 'Estatuto de los trabajadores',
    country: 'España',
    image: '../../../assets/article.svg',
    url: 'https://www.emerita.legal',
  },
  {
    title: 'Resolución 1232/22 del Juzgado de lo Social de A Coruña',
    subtitle: 'Resoluciones - 1ª instancia',
    type: ResourceTypes.Sentence,
    country: 'España',
    image: '../../../assets/resolution.png',
    url: 'https://www.emerita.legal',
  },
];
const related: Resource[] = [
  {
    title: 'Formulario de demanda para despido disciplinario',
    subtitle: 'Plantillas demandante',
    type: ResourceTypes.Template,
    country: 'España',
    image: '../../../assets/template.svg',
    url: 'https://www.emerita.legal',
  },
  {
    title:
      'Formulario de demanda para la fase de pruebas de despido disciplinario',
    subtitle: 'Plantillas demandante',
    type: ResourceTypes.Template,
    country: 'España',
    image: '../../../assets/template.svg',
    url: 'https://www.emerita.legal',
  },
];

export const topics: Array<Topic> = [
  {
    id: 1,
    name: 'DERECHO LABORAL',
    type: 'Derecho',
    isCentral: true,
    title: 'DERECHO LABORAL',
    image:
      'https://humanidades.com/wp-content/uploads/2017/03/derecho-laboral-e1563660386267.jpg',
    subtitle: 'Curación por Emérita Legal y 250 expertos',
    description:
      'El derecho laboral es una especialidad que busca proteger a los trabajadores y regular la contratación por parte de las empresas. Las reclamaciones de salarios, los despidos, las indemnizaciones… son de las materias más discutidas en esta rama de derecho',
    childs: [
      {
        id: 2,
        name: 'DERECHOS',
        title: 'DERECHOS',
        subtitle: 'Revisado por 150 expertos en la materia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        childs: [
          {
            id: 20,
            name: 'EMPLEADORES',
            title: 'EMPLEADORES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 21,
            name: 'EMPLEADOS',
            title: 'EMPLEADOS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 22,
            name: 'AUTÓNOMOS',
            title: 'AUTÓNOMOS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 23,
            name: 'TRABAJADORES INTERNACIONALES',
            title: 'TRABAJADORES INTERNACIONALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 24,
            name: 'DISCRIMINACIÓN O ACOSO LABORAL',
            title: 'DISCRIMINACIÓN O ACOSO LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
        ] as Topic[],
      },
      {
        id: 3,
        name: 'ESPECIALIDADES',
        title: 'ESPECIALIDADES',
        image:
          'https://bbl-bdb.s3.amazonaws.com/sets/images/derecho_laboral.jpg',
        subtitle: 'Curación por Emérita Legal y 250 expertos',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        publications: [
          {
            id: 1,
            title: 'Baja voluntaria y abandono del trabajo: ¿es lo mismo?',
            image:
              'https://www.emerita.legal/blog/wp-content/uploads/2021/03/baja-voluntaria-abandono-trabajo.png',
            url: 'https://www.emerita.legal/blog/laboral/baja-voluntaria-abandono-trabajo-mismo-133686/',
            subtitle:
              '¿Cuál es la diferencia entre la baja voluntaria y el abandono del puesto de trabajo?, ¿tengo derecho a paro si curso la baja voluntaria?, ¿cuáles son las consecuencias del abandono del puesto de trabajo? Javier Monge Abad experto en Derecho del Trabajo, nos lo cuenta todo sobre esta cuestión.',
            type: ResourceTypes.Publication,
          },
          {
            id: 2,
            title: '¿Cómo actuar ante una inspección de trabajo?',
            image:
              'https://www.emerita.legal/blog/wp-content/uploads/2021/02/inspeccion-de-trabajo.jpg',
            url: 'https://www.emerita.legal/blog/laboral/inspeccion-de-trabajo-97637/',
            subtitle:
              '¿Quieres saber cómo actuar ante una inspección de trabajo?, ¿conoces la documentación que puede solicitar el inpector?, ¿deseas saber si puedes reclamar en caso de no estar de acuerdo con la sanción que te interponga el inspector de trabajo?, la abogada especializada en Control administrativo, Amanda Grande Troncoso, resuelve todas las dudas relacionadas a este temática.',
            type: ResourceTypes.Publication,
          },
          {
            id: 3,
            title: '¿Puede la empresa obligarme a coger vacaciones?',
            image:
              'https://www.emerita.legal/blog/wp-content/uploads/2021/03/pexels-anna-shvets-5711914.jpg',
            url: 'https://www.emerita.legal/blog/laboral/obligarme-coger-vacaciones-92327/',
            subtitle:
              '¿Cómo puedo calcular los días que puedo coger de vacaciones?, ¿puede la empresa obligarme a coger vacaciones?, ¿qué pasa si las vacaciones me coinciden con una baja?, el abogado Miguel Escandell Pérez, experto en Derecho del trabajo, resuelve todas las dudas relacionadas a este tema.',
            type: ResourceTypes.Publication,
          },
        ],
        childs: [
          {
            id: 30,
            name: 'DERECHO DEL CONFLICTO DEL TRABAJO',
            title: 'DERECHO DEL CONFLICTO DEL TRABAJO',
            image:
              'https://economipedia.com/wp-content/uploads/conflicto-laboral.jpg',
            subtitle: 'Curación por Emérita Legal y 55 expertos',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
            publications: [
              {
                id: 1,
                title:
                  '¿Cómo denunciar a una empresa que tiene trabajadores sin contrato?',
                image:
                  'https://www.emerita.legal/blog/wp-content/uploads/2023/03/denunciar-empresa-tiene-trabajadores-sin-contrato.jpg',
                url: 'https://www.emerita.legal/blog/laboral/como-denunciar-empresa-tiene-trabajadores-sin-contrato-142561/',
                subtitle:
                  'Motivos para denunciar a una empresa que tiene trabajadores sin contrato. ¿Qué hay que hacer para denunciar por tener trabajadores sin contrato? ¿Qué pruebas se necesitan para denunciar que se trabaja sin contrato? ¿Cómo va a ser el proceso una vez se ponga la denuncia? ¿Cuáles pueden ser las consecuencias si denuncio a la empresa por tener trabajadores sin contrato? Ejemplos de casos de denuncias a empresas por tener trabajadores sin contrato. Estas son algunas de las preguntas que más se buscan en relación a esta casuística y el abogado experto en derecho del trabajo, José Ramón Millán Cidón, te da la respuesta y ofrece su asistencia.',
                type: ResourceTypes.Publication,
              },
              {
                id: 2,
                title: 'Despido durante la baja de paternidad ¿Es legal?',
                image:
                  'https://www.emerita.legal/blog/wp-content/uploads/2023/03/Despido-durante-baja-paternidad.jpg',
                url: 'https://www.emerita.legal/blog/laboral/despido-durante-baja-paternidad-legal-98760/',
                subtitle:
                  '¿Es legal que me despidan durante la baja de paternidad? ¿Cómo puede justificar la empresa el despido? ¿Cobro salarios de tramitación si he percibido el paro? ¿Qué hago si me han despedido durante la baja por paternidad? ¿Qué va a pasar después de demandar a la empresa? Ejemplos de casos de despidos durante la baja por paternidad. Estas son algunas de las preguntas que más se buscan en relación a esta casuística y José Manuel Laguna Redondo, abogado especialista en derecho del trabajo, te da la respuesta y ofrece su asistencia en el siguiente artículo.',
                type: ResourceTypes.Publication,
              },
              {
                id: 3,
                title: 'Despido nulo por represalias',
                image:
                  'https://www.emerita.legal/blog/wp-content/uploads/2023/01/despido-nulo-por-represalias.jpg',
                url: 'https://www.emerita.legal/blog/laboral/despido-nulo-represalias-143455/',
                subtitle:
                  '¿Qué es un despido por vulneración de la garantía de indemnidad? ¿Cuál es la garantía de indemnidad que protege al trabajador? ¿Cómo recurrir un despido por represalias a la empresa? ¿Es posible recuperar tu trabajo si el despido es considerado como nulo por un juez? Estas son algunas de las preguntas que más se buscan en relación a esta casuística y el abogado experto en Derecho Laboral y Derecho de la Seguridad Social, Diego Lorenzo Riveiro, te da la respuesta y ofrece su asistencia.',
                type: ResourceTypes.Publication,
              },
            ],
          },
          {
            id: 31,
            name: 'DERECHO DE LA CONTRATACIÓN LABORAL',
            title: 'DERECHO DE LA CONTRATACIÓN LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 32,
            name: 'DERECHO COLECTIVO DEL TRABAJO',
            title: 'DERECHO COLECTIVO DEL TRABAJO',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 33,
            name: 'DERECHO SINDICAL Y PATRONAL',
            title: 'DERECHO SINDICAL Y PATRONAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 34,
            name: 'NEGOCIACIÓN COLECTIVA',
            title: 'NEGOCIACIÓN COLECTIVA',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 35,
            name: 'PREVENCIÓN DE RIESGOS LABORALES',
            title: 'PREVENCIÓN DE RIESGOS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 36,
            name: 'DERECHO ARBITRAL',
            title: 'DERECHO ARBITRAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
        ],
      },
      {
        id: 4,
        name: 'LEGISLACIÓN',
        title: 'LEGISLACIÓN',
        subtitle: 'Revisado por 150 expertos en la materia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        childs: [
          {
            id: 40,
            name: 'ESTATUTO DE LOS TRABAJADORES',
            title: 'ESTATUTO DE LOS TRABAJADORES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 41,
            name: 'CONSTITUCIÓN ESPAÑOLA',
            title: 'CONSTITUCIÓN ESPAÑOLA',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 42,
            name: 'LEY DE PREVENCIÓN DE RIESGOS LABORALES',
            title: 'LEY DE PREVENCIÓN DE RIESGOS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 43,
            name: 'LEY ORGÁNICA DE LIBERTAD SINDICAL',
            title: 'LEY ORGÁNICA DE LIBERTAD SINDICAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 44,
            name: 'INFRACCIONES Y SANCIONES DEL ORDEN SOCIAL',
            title: 'INFRACCIONES Y SANCIONES DEL ORDEN SOCIAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 45,
            name: 'CONVENIOS COLECTIVOS',
            title: 'CONVENIOS COLECTIVOS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 46,
            name: 'LEY DE EMPLEO',
            title: 'LEY DE EMPLEO',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
        ],
      },
      {
        id: 5,
        name: 'SERVICIOS',
        title: 'SERVICIOS',
        subtitle: 'Revisado por 150 expertos en la materia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        childs: [
          {
            id: 50,
            name: 'ABOGADOS LABORALISTAS',
            title: 'ABOGADOS LABORALISTAS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 51,
            name: 'DESPACHOS LABORALISTAS',
            title: 'DESPACHOS LABORALISTAS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 52,
            name: 'RANKING ABOGADOS LABORALISTAS',
            title: 'RANKING ABOGADOS LABORALISTAS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 53,
            name: 'RANKING DESPACHOS LABORALISTAS',
            title: 'RANKING DESPACHOS LABORALISTAS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 55,
            name: 'FAQ PREGUNTAS FRECUENTES',
            title: 'FAQ PREGUNTAS FRECUENTES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 51234,
            name: 'ASESORAMIENTO LABORAL',
            title: 'ASESORAMIENTO LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 56,
            name: 'REPRESENTACIÓN EN JUICIOS LABORALES',
            title: 'REPRESENTACIÓN EN JUICIOS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 57,
            name: 'SERVICIOS DE MEDIACIÓN LABORAL',
            title: 'SERVICIOS DE MEDIACIÓN LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 58,
            name: 'SERVICIOS DE ARBITRAJE LABORAL',
            title: 'SERVICIOS DE ARBITRAJE LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 59,
            name: 'JUICIOS Y APELACIONES LABORALES',
            title: 'JUICIOS Y APELACIONES LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 550,
            name: 'CONSULTAS LABORALES',
            title: 'CONSULTAS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 551,
            name: 'REVISIÓN DE DOCUMENTOS LABORALES',
            title: 'REVISIÓN DE DOCUMENTOS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 552,
            name: 'ASESORAMIENTO EN CUMPLIMIENTO NORMATIVO',
            title: 'ASESORAMIENTO EN CUMPLIMIENTO NORMATIVO',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 553,
            name: 'ASESORAMIENTO EN RELACIONES LABORALES INTERNACIONALES',
            title: 'ASESORAMIENTO EN RELACIONES LABORALES INTERNACIONALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
        ],
      },
      {
        id: 6,
        name: 'PROCEDIMIENTOS',
        title: 'PROCEDIMIENTOS',
        subtitle: 'Revisado por 150 expertos en la materia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        childs: [
          {
            id: 60,
            name: 'RECLAMACIONES LABORALES',
            title: 'RECLAMACIONES LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 61,
            name: 'JUICIOS LABORALES',
            title: 'JUICIOS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 62,
            name: 'APELACIÓN LABORAL',
            title: 'APELACIÓN LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 63,
            name: 'CONCILIACIÓN LABORAL',
            title: 'CONCILIACIÓN LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 64,
            name: 'MEDIACIÓN LABORAL',
            title: 'MEDIACIÓN LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 65,
            name: 'ARBITRAJE LABORAL',
            title: 'ARBITRAJE LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
        ],
      },
      {
        id: 7,
        name: 'DOCUMENTACIÓN',
        title: 'DOCUMENTACIÓN',
        subtitle: 'Revisado por 150 expertos en la materia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        childs: [
          {
            id: 70,
            name: 'CONTRATOS DE TRABAJO',
            title: 'CONTRATOS DE TRABAJO',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 71,
            name: 'CARTAS DE DESPIDO',
            title: 'CARTAS DE DESPIDO',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 72,
            name: 'ACUERDOS LABORALES',
            title: 'ACUERDOS LABORALES',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 73,
            name: 'DOCUMENTACIÓN LEGAL LABORAL',
            title: 'DOCUMENTACIÓN LEGAL LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 77,
            name: 'SENTENCIAS',
            title: 'SENTENCIAS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 75,
            name: 'DOCTRINA Y JURISPUDENCIA',
            title: 'DOCTRINA Y JURISPUDENCIA',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
        ],
      },
      {
        id: 8,
        name: 'CASOS',
        title: 'CASOS',
        subtitle: 'Revisado por 150 expertos en la materia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
        type: 'Derecho',
        isCentral: false,
        childs: [
          {
            id: 80,
            name: 'CASOS LABORALES RESUELTOS',
            title: 'CASOS LABORALES RESUELTOS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 81,
            name: 'CASOS LABORALES EN CURSO',
            title: 'CASOS LABORALES EN CURSO',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 82,
            name: 'ESTUDIOS DE CASOS',
            title: 'ESTUDIOS DE CASOS',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
            isCentral: false,
          },
          {
            id: 83,
            name: 'GLOSARIO LEGAL LABORAL',
            title: 'GLOSARIO LEGAL LABORAL',
            subtitle: 'Revisado por 150 expertos en la materia',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quos repellat, nostrum, cum voluptatibus possimus velit debitis aliquid aliquam repudiandae voluptatem, maxime id in doloremque consequuntur eos vitae mollitia quae!',
            type: 'Derecho',
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

export const chatTopic = {
  id: 84,
  name: 'DESPIDO DISCIPLINARIO',
  title: 'DESPIDO DISCIPLINARIO',
  image: 'https://allabogados.com/wp-content/uploads/2021/09/IMG-1.png',
  subtitle: 'Curación por Emérita Legal y 55 expertos',
  description:
    'El despido disciplinario en España es una acción que un empleador comete una falta grave en el trabajo, como indisciplina, violación de la buena fe contractual o acoso. Este tipo de despido, regulado por el Estatuto de los Trabajadores, no conlleva a indemnización para el trabajador y puede tener consecuencias significativas para su estabilidad laboral y sus derechos laborales.',
  type: 'Derecho',
  isCentral: false,
  profiles,
  laws,
  related,
};
