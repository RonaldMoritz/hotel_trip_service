<template>
  <div class="layout-header">

    <h1 class="main-heading">Hotel Trip Service</h1>

    <div class="topnav row">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/trip-erstellen" class="link">Trip erstellen</router-link>
      <router-link to="/gast-erstellen" class="link">Gast erstellen</router-link>
      <router-link to="/buchung-erstellen" class="link">Trip buchen</router-link>
      <router-link to="/storno" class="link">Buchungsübersicht</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>