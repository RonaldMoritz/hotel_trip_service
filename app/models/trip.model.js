const sql = require("./db.js");

// constructor
const Trip = function (trip) {
    this.type = trip.type;
    this.description = trip.description;
    this.price = trip.price;
    this.start_date = trip.start_date;
    this.start_time = trip.start_time;
    this.end_date = trip.end_date;
    this.end_time = trip.end_time;
};

Trip.create = (newTrip, result) => {
    sql.query("INSERT INTO trip SET ?", newTrip, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created trip: ", {id: res.insertId, ...newTrip});
        result(null, {id: res.insertId, ...newTrip});
    });
};

Trip.getAll = result => {
    sql.query("SELECT * FROM trip", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("trip: ", res);
        result(null, res);
    });
};


module.exports = Trip;
