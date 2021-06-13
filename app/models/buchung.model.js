const sql = require("./db.js");

// constructor
const Buchung = function (buchung) {
    this.trip = buchung.trip;
    this.guest = buchung.guest;
};

Buchung.create = (newBuchung, result) => {
    sql.query("INSERT INTO booking SET ?", newBuchung, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created buchung: ", {id: res.insertId, ...newBuchung});
        result(null, {id: res.insertId, ...newBuchung});
    });
};

Buchung.getAll = result => {
    sql.query("SELECT * FROM booking", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("buchung: ", res);
        result(null, res);
    });
};

Buchung.getJOIN = result => {
    sql.query("SELECT * FROM booking", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("JOIN: ", res);
        result(null, res);
    });
};


module.exports = Buchung;
