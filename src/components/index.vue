<template>
  <div class="page-heading-container">
    <h2 class="sub-heading page-heading">Hotel Trip Service</h2>
    <h3 class="sub-heading page-desc">Verwalten Sie Gesundheitseinrichtungen in Österreich!</h3>
  </div>


  <div class="home-style">
    <div>
      <h4>Reiter "Trip erstellen":</h4>
      <p>Hier können Sie einen neuen Trip inklusive Typ, Beschreibung, Preis und Zeitfenster erstellen.</p>
    </div>

    <div>
      <h4>Reiter "Gast erstellen":</h4>
      <p>Hier können Sie einen Gast erstellen.</p>
    </div>

    <div>
      <h4>Reiter "Trip buchen":</h4>
      <p>Hier können Sie für einen Gast einen Trip buchen.</p>
    </div>

    <div>
      <h4>Reiter "Buchungsübersicht":</h4>
      <p>Hier finden Sie eine Übersicht über alle erstellten Buchungen. Außerdem können diese Buchungen hier storniert werden.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
