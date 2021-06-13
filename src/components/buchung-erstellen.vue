<template>
  <div class="submit-form">

    <div class="page-heading-container">
      <h2 class="sub-heading page-heading">Trip buchen</h2>
    </div>




    <div class="assignment-guest-table">
      <table class="table table-hover">
        <caption>Liste von erfassten Gästen</caption>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Vorname</th>
          <th scope="col">Nachname</th>
          <th scope="col">Alter</th>
        </tr>
        <!-- iterate over guests -->
        <tr v-for="guest in guests" :key="guest">
          <!-- iterate over each value of a guest -->
          <td v-for="value in guest" :key="value">
            <!-- display the value -->
            {{ value }}
          </td>
          <!-- create an additional column for the trip selection -->
        </tr>
      </table>
    </div>

    <div class="assignment-trip-table">
      <table class="table table-hover">
        <caption>Liste von erfassten Trips</caption>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Typ</th>
          <th scope="col">Beschreibung</th>
          <th scope="col">Preis</th>
          <th scope="col">Startdatum</th>
          <th scope="col">Startzeit</th>
        </tr>
        <!-- iterate over trips -->
        <tr v-for="trip in trips" :key="trip">
          <td> {{trip.id}} </td>
          <td> {{trip.type}} </td>
          <td> {{trip.description}} </td>
          <td> {{trip.price}} </td>
          <td> {{trip.start_date}} </td>
          <td> {{trip.start_time}} </td>
          <!-- create an additional column for the trip selection -->
        </tr>
      </table>
    </div>



    <div class="row">
      <div class="col-auto">
        <div class="name-container">
          <label for="guests">Gast-ID auswählen:</label> <br>
          <select v-model="booking.guest" class="form-control" id="guests" name="guests">
            <option v-for="guest in guests" :key="guest">{{ guest.id }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-auto">
        <div class="name-container">
          <label for="trips">Trip-ID auswählen:</label> <br>
          <select v-model="booking.trip" class="form-control" id="trips" name="trips">
            <option v-for="trip in trips" :key="trip">{{ trip.id }}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="action-bar">
      <button type="button" class="btn btn-success">
        <input class="submit-button-label" @click="saveBooking" type="submit" value="Buchen">
      </button>
    </div>

  </div>
</template>

<script>
import BuchungDataService from "@/services/BuchungDataService";
import TripDataService from "@/services/TripDataService";
import GastDataService from "@/services/GastDataService";

export default {
  data() {
    return {
      booking: {},
      guests: null,
      trips: null,
    }
  },


  mounted() {

    //get trips
    TripDataService.get().then(response => {
      this.trips = response.data;

    }).catch(e => {
      console.log(e);
    });

    //get guests
    GastDataService.get().then(response => {
      this.guests = response.data;

    }).catch(e => {
      console.log(e);
    });


  },

  methods: {
    saveBooking() {

      BuchungDataService.create(this.booking)
          .then(response => {
            this.booking.id = response.data.id;
            console.log(response.data);
            location.reload();
          })
          .catch(e => {
            console.log(e);
          });
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
