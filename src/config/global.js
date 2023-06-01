export default {
  global: {
    componenteFormativo: 'Interpretación, normativa y tipologías discursivas',
    descripcionCurso:
      'En este componente formativo se reconocerán los conceptos básicos relacionados con el proceso de interpretación y su relación con las tipologías discursivas, además se identificarán la normatividad establecida dentro del contexto de la Lengua de Señas Colombiana LSC, lo que permitirá reconocer las posibilidades y necesidades que tiene la comunidad sorda dentro del Estado colombiano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La interpretación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Modelos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modalidades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Protocolos de etiquetas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Código de ética del intérprete',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Lineamientos normativos de interpretación, traducción y discapacidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Antecedentes relacionados con la población sorda',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de búsqueda de información',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fundamentos lingüísticos, textuales y discursivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Áreas interdisciplinarias de la lingüística',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructuras de la lingüística textual',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Análisis del discurso',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipología discursiva',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF04_DU.pdf',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'ACNUR, U. (2020). Grupos minoritarios.',
      link: 'https://www.acnur.org/grupos-minoritarios.html',
    },
    {
      referencia:
        'Congreso de Colombia. (1994). Ley 115 de 1994. Por la cual se expide la Ley General de Educación. Febrero 8 de 1994. D.O. 41.214.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-85906_archivo_pdf.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (1996). Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda. D.O. 42899.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=349',
    },
    {
      referencia:
        'Congreso de Colombia. (1997). Ley 361 de 1997. Por la cual se establecen mecanismos de integración social de las personas con limitación en situación de discapacidad y se dictan otras disposiciones. D.O. 42.978.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=343#:~:text=-%20El%20presente%20t%C3%ADtulo%20establece%20las,%2C%20analfabetismo%2C%20limitación%20o%20enfermedad',
    },
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 762 de 2002. Por medio de la cual se aprueba la "Convención Interamericana para la Eliminación de todas las Formas de Discriminación contra las Personas con Discapacidad", suscrita en la ciudad de Guatemala, Guatemala, el siete (7) de junio de mil novecientos noventa y nueve (1999). D.O. 44.889',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8797#:~:text=%22Por%20medio%20de%20la%20cual,y%20nueve%20(1999)%22',
    },
    {
      referencia:
        'Jiménez, A. (2002). Variedades de interpretación: modalidades y tipos. <em>Hermeneus: Revista de la Facultad de Traducción e Interpretación de Soria</em>, (4), 95-114.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=290509',
    },
    {
      referencia:
        'Méndez, R. (2010). Figura del intérprete de lengua de signos en educación. <em>Revista Digital para Profesionales de la Enseñanza.</em>',
      link: 'https://www.feandalucia.ccoo.es/docu/p5sd7181.pdf',
    },
    {
      referencia:
        'Oviedo, A. (2001). <em>Sobre lingüística, lengua de señas, y este libro</em>. Universidad del Valle - Insor.',
      link:
        'https://lenguasdecolombia.caroycuervo.gov.co/contenido/Lenguas-de-senas-colombiana/Resena/contenido/93&',
    },
    {
      referencia:
        'Pérez de la Fuente, O. (2016). Las personas sordas como minoría cultural y lingüística. <em>Dilemata</em>, 6(15), 267-287.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4834536.pdf',
    },
    {
      referencia:
        'Presidencia de Colombia. (1997). Decreto 2369 de 1997. Por medio del cual se reglamenta parcialmente la Ley 324 de 1996. D.O. 43137.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-2369-de-1997.pdf',
    },
    {
      referencia:
        'Rodríguez, M., y Velásquez, R. (2000). Historia y gramática de la lengua de señas. <em>Pedagogía y Saberes</em>, (14), 91-104.',
      link:
        'https://revistas.pedagogica.edu.co/index.php/PYS/article/view/6242',
    },
  ],
  glosario: [
    {
      termino: 'Cultura',
      significado:
        'conjunto de conocimientos, ideas, tradiciones y costumbres de un pueblo o grupo de personas.',
    },
    {
      termino: 'Discapacidad',
      significado:
        'resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.',
    },
    {
      termino: 'Grupos minoritarios',
      significado:
        'grupos étnicos, religiosos o lingüísticos, en menor número que el resto de la población. Los pueblos indígenas poseían tierras antes de ser invadidas y colonizadas (Acnur, Agencia de la ONU para los refugiados, 2020).',
    },
    {
      termino: 'Inclusión',
      significado:
        'enfoque que responde positivamente a la diversidad de las personas y a las diferencias individuales, entendiendo que la diversidad no es un problema, sino una oportunidad para el enriquecimiento de la sociedad, a través de la activa participación en la vida familiar, en la educación, en el trabajo y en general en todos los procesos sociales, culturales y en las comunidades.',
    },
    {
      termino: '<em>Input</em>',
      significado:
        'información de entrada, conjunto de datos introducidos en un sistema informático.',
    },
    {
      termino: '<em>Output</em>',
      significado: 'información de salida, información ya procesada.',
    },
  ],
  complementario: [
    {
      tema:
        'Lineamientos normativos de interpretación, traducción y discapacidad ',
      referencia:
        'Presidencia de la República de Colombia. (1997). Decreto 2369 de 1997. Por el cual se reglamenta parcialmente la Ley 324 de 1996. D.O. 43137.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-2369-de-1997.pdf',
    },
    {
      tema:
        'Lineamientos normativos de interpretación, traducción y discapacidad ',
      referencia:
        'Congreso de Colombia. (2005). Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones. 2 de agosto de 2005. D.O. 45995.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17283#:~:text=El%20Gobierno%20Nacional%20instituir%C3%A1%20programas,comunidad%20de%20sordos%20y%20sordociegos.M',
    },
    {
      tema:
        'Lineamientos normativos de interpretación, traducción y discapacidad ',
      referencia:
        'Congreso de Colombia. (2013). Ley Estatutaria 1618 de 2013. Por medio de la cual se establecen las disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad. Febrero 27 de 2013. D.O. 48.717.',
      tipo: 'PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081',
    },

    {
      tema:
        'Lineamientos normativos de interpretación, traducción y discapacidad ',
      referencia:
        'Alcaldía Local de Engativá. (2018). Resolución 496 de 2018. Por la cual se reglamenta el artículo 7° de la Ley 972 de 2005 y se implementa la evaluación Nacional de intérpretes de Lengua de Señas Colombiana –ENILSCE- y el Registro Nacional de Lengua de Señas Colombiana -español y guías intérpretes (RENI).',
      tipo: 'PDF',
      link:
        'http://www.gobiernobogota.gov.co/sgdapp/sites/default/files/normograma/RESOLUCION%20496-2018%20ISABEL%20MONTERO%2008-06-2018.pdf',
    },
    {
      tema:
        'Lineamientos normativos de interpretación, traducción y discapacidad ',
      referencia:
        'Unidad para la atención de las víctimas, Ministerio de justicia. Ministerio de Salud. (2016). <em>Guía de atención a las personas con discapacidad en el acceso a la justicia.</em>',
      tipo: 'PDF',
      link:
        'https://escuelajudicial.ramajudicial.gov.co/sites/default/files/guia_de_atencion_a_las_personas_con_discapacidad_en_el_acceso_a_la_justicia__0.pdf',
    },
    {
      tema: 'Fundamentos lingüísticos, textuales y discursivos',
      referencia:
        'Barreto, A., y Heredia, S. (2012). El uso del software de transcripción lingüística ELAN en el análisis de la interpretación de lengua de señas colombiana en el contexto universitario. <em>Mutatis Mutandis: Revista Latinoamericana de Traducción, 5(2), 295-319.</em>',
      tipo: 'PDF',
      link:
        'https://revistas.udea.edu.co/index.php/mutatismutandis/article/view/13066/12452',
    },
    {
      tema: 'Fundamentos lingüísticos, textuales y discursivos',
      referencia:
        'Pérez de la Fuente, O. (2016). Las personas sordas como minoría cultural y lingüística. Dilemata, (15), 267-287.',
      tipo: 'PDF',
      link:
        'https://www.dilemata.net/revista/index.php/dilemata/article/view/308',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Luz Mila Pacheco Fuentes',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortiz Abella ',
          cargo: 'Corrector de estilo ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
