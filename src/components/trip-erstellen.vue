<template>
  <div class="submit-form">

    <div class="page-heading-container">
      <h2 class="sub-heading page-heading">Trip erstellen</h2>
    </div>


    <div class="row input-row">
      <div class="col-md-6">
        <div class="name-container">
          <label for="type">Typ:</label> <br>
          <select v-model="trip.type" class="form-control" id="type" name="type">
            <option>Sport</option>
            <option>Essen</option>
            <option>Besichtigung</option>
            <option>Familienabenteuer</option>
            <option>Anderes</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="name-container">
          <label for="desc">Beschreibung:</label><br>
          <textarea v-model="trip.description" id="desc" name="desc" placeholder="Beschreibung"
                    class="inpute-width"
                    required></textarea>
        </div>
      </div>
    </div>


    <div class="row input-row">
      <div class="col-md-6">
        <div class="name-container">
          <label for="price">Preis:<br>
            <input v-model="trip.price" type="number" id="price" class="inpute-width" required>
          </label>
        </div>
      </div>
    </div>


    <div class="row input-row">
      <div class="col-md-6">
        <div class="name-container">
          <label for="sdate">Startdatum:</label><br>
          <input v-model="trip.start_date" type="date" id="sdate" name="sdate"
                 class="inpute-width"
                 required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="name-container">
          <label for="stime">Startzeit:</label><br>
          <input v-model="trip.start_time" type="time" id="stime" name="stime"
                 class="inpute-width"
                 required>
        </div>
      </div>
    </div>

    <div class="row input-row">
      <div class="col-md-6">
        <div class="name-container">
          <label for="edate">Enddatum:</label><br>
          <input v-model="trip.end_date" type="date" id="edate" name="edate"
                 class="inpute-width"
                 required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="name-container">
          <label for="etime">Endzeit:</label><br>
          <input v-model="trip.end_time" type="time" id="etime" name="etime"
                 class="inpute-width"
                 required>
        </div>
      </div>
    </div>


    <div class="action-bar">
      <button type="button" class="btn btn-success">
        <input class="submit-button-label" @click="saveTrip" type="submit" value="Erstellen">
      </button>
    </div>

  </div>
</template>

<script>
import TripDataService from "@/services/TripDataService";

export default {
  name: 'index',

  data() {
    return {
      trip: {}
    }
  },

  methods: {
    saveTrip() {
      TripDataService.create(this.trip)
          .then(response => {
            this.trip.id = response.data.id;
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
