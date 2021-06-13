<template>
  <div class="submit-form">

    <div class="page-heading-container">
      <h2 class="sub-heading page-heading">Buchungsübersicht</h2>
    </div>




    <div class="assignment-guest-table">
      <table class="table table-hover">
        <caption>Liste aller Buchungen</caption>
        <tr>
          <th scope="col">Buchungs-ID</th>
          <th scope="col">Trip-ID</th>
          <th scope="col">Gast-ID</th>
        </tr>
        <!-- iterate over guests -->
        <tr v-for="(booking, index) in bookings" :key="index">
          <td>{{booking.id}}</td>
          <td>{{booking.trip}}</td>
          <td>{{booking.guest}}</td><td><button @click='deleteTableRow(index)' >Stornieren</button></td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import BuchungDataService from "@/services/BuchungDataService";

export default {
  data() {
    return {
      bookings: null,
      counter:2
    }
  },


  mounted() {

    //get bookings
    BuchungDataService.get().then(response => {
      this.bookings = response.data;

    }).catch(e => {
      console.log(e);
    });

  },

  methods: {
    deleteTableRow: function (idx) {

      this.counter--;
      this.bookings.splice(idx, 1);
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
