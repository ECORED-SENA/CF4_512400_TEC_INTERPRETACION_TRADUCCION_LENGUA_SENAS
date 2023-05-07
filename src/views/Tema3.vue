<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fundamentos lingüísticos, textuales y discursivos
    .row.mb-4
      .col-lg-8.mb-4.mb-lg-0
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p De acuerdo con Coseriu (1951), "La lingüística, llamada también ciencia del lenguaje, glotología o glosología, y con menos propiedad, también filología, filología comparada, gramática comparada, es la ciencia que estudia desde todos los puntos de vista posibles el lenguaje humano articulado, en general y en las formas específicas en las que se realiza."

        p(data-aos="fade-up") El mismo autor afirma que la lingüística estudia, sin duda, los idiomas, pero no para aprenderlos, es decir, que los estudia científicamente como fenómenos, no como instrumentos.

        p.txt-color-primario(data-aos="fade-up") #[b Mientras que la lingüística investiga cómo se manifiesta el lenguaje en sus diferentes formas históricas, es decir, las lenguas, el lenguaje, por su parte, se define como todo sistema de signos que permite expresar, comunicar ideas, pensamientos y sentimientos. El lenguaje es el acto lingüístico que, a su vez, emplea signos del lenguaje para la comunicación.]

      .col-lg-4.col-md
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img1b.png').m-auto
    .row.align-items-center.mb-5
      .col-auto
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img2.svg').m-auto
      .col
        p.mb-0(data-aos="fade-left") Estos actos lingüísticos no son idénticos, sino que varían entre los individuos. Una comunidad lingüística requiere que sus signos sean similares, con significados similares para que la comunicación sea posible, es por eso por lo que se puede hablar de actos o identidad lingüísticos de una comunidad (isoglosas como acto lingüístico del mismo territorio o común en el tiempo).

    .row.mb-4
      .col-auto.bg-c5
        h3.mb-0.py-2.px-5(data-aos="fade-up") Áreas interdisciplinarias de la lingüística
    p.mb-5(data-aos="fade-right") Es fundamental conocer un poco sobre cada una de las áreas disciplinares que se estudian dentro de la lingüística, para tal fin revise con atención la siguiente información:
    .row.bg-c10.justify-content-center.mb-5
      .col-lg-10.d-none.d-lg-block
        .px-5.py-4
          ImagenInfografica.color-acento-botones(data-aos="fade-up")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img3.svg')
            .tarjeta.color-acento-botones.p-3(x="3%" y="28%" numero="+")
              .h5.mb-2 Lingüística aplicada
              p.mb-0 Se centra en el estudio de los problemas sociales que tienen que ver con el lenguaje.
            .tarjeta.color-acento-botones.p-3(x="3%" y="51%" numero="+")
              .h5.mb-2 Lingüística computacional
              p.mb-0 Aplica los métodos de la inteligencia artificial al tratamiento de cuestiones lingüísticas. Transforma el lenguaje natural a uno computacional.
            .tarjeta.color-acento-botones.p-3(x="3%" y="73%" numero="+")
              .h5.mb-2 Lingüística contrastiva
              p.mb-0 Describe en detalle las diferencias y similitudes entre dos o más lenguas tomando en cuenta el nivel fonológico, morfológico y sintáctico.
            .tarjeta.color-acento-botones.p-3(x="97%" y="28%" numero="+")
              .h5.mb-2 Lingüística comparada
              p.mb-0 Estudia las relaciones entre dos o más lenguas.
            .tarjeta.color-acento-botones.p-3(x="97%" y="51%" numero="+")
              .h5.mb-2 Lingüística evolutiva
              p.mb-0 También conocida como lingüística diacrónica o gramática histórica: estudia los cambios concretos de una lengua tanto en la fonología como en la gramática desde la lingüística histórica.
            .tarjeta.color-acento-botones.p-3(x="97%" y="73%" numero="+")
              .h5.mb-2 Lingüística textual
              p.mb-0 Estudia el texto y está fuertemente relacionada con el análisis del discurso. La lingüística textual deduce que el texto debe trabajar interdisciplinariamente con la sociolingüística, la pragmática, la lógica de predicados, la filosofía y la psicología cognoscitiva. Además, estudia todo el significado contextual, es decir, todo lo que rodea una palabra.
      .col-lg-10.d-block.d-lg-none
        .px-5.py-4
          ImagenInfografica.color-acento-botones(data-aos="fade-up")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img3b.svg')
            .tarjeta.color-acento-botones.p-3(x="5%" y="20%" numero="+")
              .h5.mb-2 Lingüística aplicada
              p.mb-0 Se centra en el estudio de los problemas sociales que tienen que ver con el lenguaje.
            .tarjeta.color-acento-botones.p-3(x="5%" y="31%" numero="+")
              .h5.mb-2 Lingüística computacional
              p.mb-0 Aplica los métodos de la inteligencia artificial al tratamiento de cuestiones lingüísticas. Transforma el lenguaje natural a uno computacional.
            .tarjeta.color-acento-botones.p-3(x="5%" y="42%" numero="+")
              .h5.mb-2 Lingüística contrastiva
              p.mb-0 Describe en detalle las diferencias y similitudes entre dos o más lenguas tomando en cuenta el nivel fonológico, morfológico y sintáctico.
            .tarjeta.color-acento-botones.p-3(x="95%" y="20%" numero="+")
              .h5.mb-2 Lingüística comparada
              p.mb-0 Estudia las relaciones entre dos o más lenguas.
            .tarjeta.color-acento-botones.p-3(x="95%" y="31%" numero="+")
              .h5.mb-2 Lingüística evolutiva
              p.mb-0 También conocida como lingüística diacrónica o gramática histórica: estudia los cambios concretos de una lengua tanto en la fonología como en la gramática desde la lingüística histórica.
            .tarjeta.color-acento-botones.p-3(x="95%" y="42%" numero="+")
              .h5.mb-2 Lingüística textual
              p.mb-0 Estudia el texto y está fuertemente relacionada con el análisis del discurso. La lingüística textual deduce que el texto debe trabajar interdisciplinariamente con la sociolingüística, la pragmática, la lógica de predicados, la filosofía y la psicología cognoscitiva. Además, estudia todo el significado contextual, es decir, todo lo que rodea una palabra.
    .row.mb-4
      .col-auto.bg-c5
        h3.mb-0.py-2.px-5(data-aos="fade-right") Estructuras de la lingüística textual
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-up").mb-4 El lingüista holandés. Van Dijk (2005), #[span.txt-c1 planteó contemplar un texto desde tres perspectivas: una general organizativa, llamada superestructura; otra global de carácter jerárquico y funcional, llamada macroestructura] (sujeta a la estructura anterior); y la microestructura, lo más básico, pero no menos importante. Un buen ejemplo es un edificio: la construcción es la superestructura; cada piso, ordenado jerárquicamente, son las macroestructuras; y los tabiques, vigas y demás elementos unidos por los remaches y el concreto (los enlaces que dan cohesión) son las microestructuras.
        .cajon.color-primario.p-4.mb-4
          .row.align-items-start
            .col-12.col-lg-auto.mb-4.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/tema3/img4.svg', style="width:80px").m-auto
            .col
              p(data-aos="fade-left") La vida diaria está rodeada de textos sean orales, corporales o escritos. El término textos, procede del latín textus que significa: tejido, textura. Está integrado por unidades lingüísticas, llamadas oraciones, que están interrelacionadas a través de los referentes y los conectores lógicos. Todo esto quiere decir, que un texto no es una simple reunión de oraciones. Es todo un entramado de ideas o, en otras palabras, una estructura.
        p.mb-0(data-aos="fade-up") #[span.txt-c1 Se invita a conocer con más a detalle en qué consisten cada una de las estructuras de la lingüística textual:]
      .col-lg-3
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/img2.png', style="width:290px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-c11
          #img3_descripcion
            .d-flex.justify-content-center.mb-4
              .btn-titulo-info
                span #[b Estructuras de la lingüística textual]

            .row.justify-content-center.mb-5
              .col-lg-10.col
                p(data-aos="fade-left") Es la estructura formal que representa las partes en que se organiza el contenido de un texto. Es el esqueleto reconocible que caracteriza un género discursivo, por su forma habitual y por ello convencional de estructurar la información: organiza las secuencias de frases y les asigna una función específica en la comunicación. Las frases de un texto se organizan en un esquema constituido por categorías funcionales, unas opcionales y otras obligatorias. Es la estructura global que caracteriza el tipo de texto, es independiente del contenido y se refiere más generalmente a la forma como se organiza la información en el texto.

          .d-none.d-lg-block
            ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-up")
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/img3_book.png')
              .tarjeta.color-acento-botones.p-3(x="23%" y="0%" numero="1")
                p.mb-1 #[b Superestructura textual]
                p.mb-0 Es la estructura formal que representa las partes en que se organiza el contenido de un texto. Es el esqueleto reconocible que caracteriza un género discursivo, estructura la información: organiza las secuencias de frases y les asigna una función específica en la comunicación. Las frases de un texto se organizan en un esquema constituido por categorías funcionales, unas opcionales y otras obligatorias.
              .tarjeta.color-acento-botones.p-3(x="50%" y="-10%" numero="2")
                p.mb-1 #[b Macroestructura textual]
                p.mb-0 Es el contenido semántico global que representa el sentido de un texto. Para que un texto se perciba como una unidad de comunicación, debe poseer un significado, es decir, el asunto del que trata o el tema. La macroestructura textual es un concepto cercano al tema o asunto del texto. Por tal motivo, el texto debe cumplir la condición de coherencia global de su significado.
              .tarjeta.color-acento-botones.p-3(x="77%" y="0%" numero="3")
                p.mb-1 #[b Microestructura textual]
                p.mb-0 Es cada una de las ideas principales o proposiciones que, relacionadas entre sí semánticamente, logran dar soporte a la idea general en un texto, construirlo, darle sentido y hacerlo coherente. Para construirlas se necesita crear nexos entre las proposiciones, preferiblemente léxicas, causales o referenciales. Primero hay que generar las proposiciones, y segundo, cohesionarlas.
          .d-block.d-lg-none
            ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-up")
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/img3b_book.png')
              .tarjeta.color-acento-botones.p-3(x="17%" y="-3%" numero="1")
                p.mb-0 Es la estructura formal que representa las partes en que se organiza el contenido de un texto. Es el esqueleto reconocible que caracteriza un género discursivo, estructura la información: organiza las secuencias de frases y les asigna una función específica en la comunicación. Las frases de un texto se organizan en un esquema constituido por categorías funcionales, unas opcionales y otras obligatorias.
              .tarjeta.color-acento-botones.p-3(x="50%" y="-12%" numero="2")
                p.mb-0 Es el contenido semántico global que representa el sentido de un texto. Para que un texto se perciba como una unidad de comunicación, debe poseer un significado, es decir, el asunto del que trata o el tema. La macroestructura textual es un concepto cercano al tema o asunto del texto. Por tal motivo, el texto debe cumplir la condición de coherencia global de su significado.
              .tarjeta.color-acento-botones.p-3(x="82%" y="-2%" numero="3")
                p.mb-0 Es cada una de las ideas principales o proposiciones que, relacionadas entre sí semánticamente, logran dar soporte a la idea general en un texto, construirlo, darle sentido y hacerlo coherente. Para construirlas se necesita crear nexos entre las proposiciones, preferiblemente léxicas, causales o referenciales. Primero hay que generar las proposiciones, y segundo, cohesionarlas.
    .row.mb-4
      .col-auto.bg-c5
        h3.mb-0.py-2.px-5(data-aos="fade-right") Análisis del discurso
    p(data-aos="fade-up") Algunos autores consideran que el texto y el discurso son sinónimos, mientras que otros, que son términos que se complementan. Así que el texto es una unidad comunicativa y el discurso incluye una serie de textos relevantes en una situación comunicativa.
    p.mb-4(data-aos="fade-left") Aunque la lingüística textual estudia el texto y está fuertemente relacionada con el análisis del discurso, este último mantiene un enfoque diferente.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/img4.png', style="width:400px").m-auto
      .col-lg-8
        .bloque-texto-c.color-acento-botones.p-4.mb-3(data-aos="fade-up")
          i.fas.fa-quote-right
          p.my-2 #[b El discurso se define, grosso modo, como el uso de la oración, es decir, la manera como se coloca en el uso comunicativo al realizar acciones del texto.]
          span.d-flex.justify-content-end.mb-3 - Bernal, (1985)
        p(data-aos="fade-right") Un discurso debe incluir las siguientes características:
        ul.lista-ul
          li.mb-0
            i.lista-ul__vineta
            | #[b Cohesión]: las proposiciones han de conectarse según las reglas de una determinada lengua.
          li.mb-0
            i.lista-ul__vineta
            | #[b Coherencia]: los enunciados que forman un texto se refieren a la misma realidad. Cuando la oración no tiene significado alguno, no aporta información ni suma en nada o bien está fuera de contexto.
          li.mb-0
            i.lista-ul__vineta
            | #[b Informatividad]: aporta información nueva.
    .row.mb-4
      .col-auto.bg-c5
        h3.mb-0.py-2.px-5(data-aos="fade-up") Tipología discursiva
    p.mb-5(data-aos="fade-up") La tipología discursiva se refiere a la forma de organizar los diversos textos en un discurso y clasificarlos. Existen infinidad de clasificaciones, dependiendo de la intención, la trama, estructura, entre otros aspectos. La clasificación más común es la distinción entre narración, descripción, argumentación, explicación y diálogo, como se muestra a continuación:
    TabsB.color-acento-contenido(data-aos="fade-up")
      .py-4.py-md-5(titulo="¿Qué pasa?" :icono="require('@/assets/curso/tema3/img5.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-3 #[b Texto narrativo]
            ul.lista-ul
              li.mb-0
                i.lista-ul__vineta
                | #[b Intención comunicativa]: relata o narra los hechos que le suceden a los personajes. Puede ser real o ficticio, con un lugar, estructura y tiempo concretos.
              li.mb-0
                i.lista-ul__vineta
                | #[b Responde a]: ¿qué pasa?
              li.mb-0
                i.lista-ul__vineta
                | #[b Estructura]: planteamiento, nudo y desenlace.
              li.mb-0
                i.lista-ul__vineta
                | #[b Ejemplos]: noticias, novelas, historias, mitos, fábulas, chistes, memoria, crónica, anécdota, reportaje.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img5.png', style="width:400px").m-auto
      .py-4.py-md-5(titulo="¿Cómo es?" :icono="require('@/assets/curso/tema3/img6.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-3 #[b Texto descriptivo]
            ul.lista-ul
              li.mb-0
                i.lista-ul__vineta
                | #[b Intención comunicativa]: cuenta cómo son los objetos, personas, sucesos, lugares, animales, sentimientos, acciones, entre otros. Se resalta el género, altura, color, distancia, temperatura, olor, etc.
              li.mb-0
                i.lista-ul__vineta
                | #[b Responde a]: ¿cómo es?
              li.mb-0
                i.lista-ul__vineta
                | #[b Estructura]: lineal (presentación del tema, caracterización del tema o personaje, propósito). Circular (textos de ficción, se altera el tiempo y el espacio).
              li.mb-0
                i.lista-ul__vineta
                | #[b Ejemplos]: cuentos, novelas, diarios, cartas, prosopografía, topografía, etopeya, retrato, autorretrato, caricatura.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img6.png', style="width:400px").m-auto
      .py-4.py-md-5(titulo="¿Qué piensa?" :icono="require('@/assets/curso/tema3/img7.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-3 #[b Texto argumentativo]
            ul.lista-ul
              li.mb-0
                i.lista-ul__vineta
                | #[b Intención comunicativa]: transmitir información desde una perspectiva subjetiva. Expresa opiniones y defiende ideas.
              li.mb-0
                i.lista-ul__vineta
                | #[b Responde a]: ¿qué pienso?
              li.mb-0
                i.lista-ul__vineta
                | #[b Estructura]: introducción, tesis (afirmación que se pone en debate), argumentación (ejemplificación, analogía, pregunta retórica, cita de autoridad, entre otros) y conclusión.
              li.mb-0
                i.lista-ul__vineta
                | #[b Ejemplos]: artículos de opinión, críticas de prensa, artículos académicos, discursos o panfletos políticos, ensayos, campañas ecológicas, editoriales de medios, cartas de recomendación, poesía.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img7.png', style="width:400px").m-auto
      .py-4.py-md-5(titulo="¿Por qué es así?" :icono="require('@/assets/curso/tema3/img8.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-3 #[b Texto explicativo]
            ul.lista-ul
              li.mb-0
                i.lista-ul__vineta
                | #[b Intención comunicativa]: dar información acerca de algo de forma objetiva, coherente, puntual y clara. Pueden ser divulgativos o especializados, de acuerdo con el público. También se conoce como texto expositivo.
              li.mb-0
                i.lista-ul__vineta
                | #[b Responde a]: ¿por qué es así?
              li.mb-0
                i.lista-ul__vineta
                | #[b Estructura]: presentación / marco, planteamiento del problema (explícito o implícito), respuesta al problema y evaluación conclusiva.
              li.mb-0
                i.lista-ul__vineta
                | #[b Ejemplos]: enciclopedias, libros de texto, artículos de divulgación, instrucciones de uso, reseñas biográficas, fichas bibliográficas, bibliografías, textos jurídicos, informes médicos, recetas.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img8.png', style="width:400px").m-auto
      .py-4.py-md-5(titulo="¿Qué dicen?" :icono="require('@/assets/curso/tema3/img9.svg')")
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-3 #[b Texto dialogado o dialógico]
            ul.lista-ul
              li.mb-0
                i.lista-ul__vineta
                | #[b Intención comunicativa]: intercambio comunicativo entre dos o más interlocutores. Los papeles de emisor y receptor se intercambian. Reproduce literalmente las palabras del personaje de manera natural. Se utiliza mucho la elipsis y la deixis. Utiliza guiones, acotaciones y comillas.
              li.mb-0
                i.lista-ul__vineta
                | #[b Responde a]: ¿qué dicen?
              li.mb-0
                i.lista-ul__vineta
                | #[b Estructura]: preparación, saludo, introducción, desarrollo (coordinación, interacción) y despedida.
              li.mb-0
                i.lista-ul__vineta
                | #[b Ejemplos]: conversación, diálogos, entrevistas, debates, foros, obra teatral, diálogo literario o cinematográfico, videollamadas, video clase, mesa redonda, tertulia, coloquio.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/img9.png', style="width:400px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
#img3_descripcion p
  font-size: .9em
  text-align: center
</style>
