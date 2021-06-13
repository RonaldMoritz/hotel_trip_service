<template>
  <div className="submit-form">

    <div className="page-heading-container">
      <h2 className="sub-heading page-heading">Gast erstellen</h2>
    </div>


    <div class="row input-row">
      <div class="col-md-6">
        <div class="name-container">
          <label for="fname">Vorname:</label> <br>
          <input v-model="guest.first_name" type="text" id="fname" name="fname" placeholder="Vorname"
                 class="inpute-width" required>
        </div>
      </div>
      <div class="col-md-6">
        <div class="name-container">
          <label for="lname">Nachname:</label><br>
          <input v-model="guest.last_name" type="text" id="lname" name="lname" placeholder="Nachname"
                 class="inpute-width" required>
        </div>
      </div>
    </div>


    <div className="row input-row">
      <div className="col-md-6">
        <div className="name-container">
          <label htmlFor="age">Alter:<br>
            <input v-model="guest.age" type="number" id="age" className="inpute-width" required>
          </label>
        </div>
      </div>
    </div>

    <div className="action-bar">
      <button type="button" className="btn btn-success">
        <input className="submit-button-label" @click="saveGuest" type="submit" value="Erstellen">
      </button>
    </div>

  </div>
</template>

<script>
import GastDataService from "@/services/GastDataService";

export default {
  name: 'index',

  data() {
    return {
      guest: {}
    }
  },

  methods: {
    saveGuest() {
      GastDataService.create(this.guest)
          .then(response => {
            this.guest.id = response.data.id;
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
