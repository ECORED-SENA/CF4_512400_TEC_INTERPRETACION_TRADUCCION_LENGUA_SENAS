<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El proceso de interpretación del lenguaje de señas es una labor de gran responsabilidad, por ende, es fundamental conocer las condiciones, protocolos, y las técnicas necesarias para garantizar un servicio de calidad.

    p Por otro lado, es necesario reconocer los lineamientos normativos establecidos dentro del contexto de interpretación y la comunidad sorda esto con el fin de garantizar el cumplimiento de los derechos fundamentales de las personas con discapacidad.

    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema :

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
