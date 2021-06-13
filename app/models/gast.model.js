const sql = require("./db.js");

// constructor
const Gast = function (gast) {
    this.first_name = gast.first_name;
    this.last_name = gast.last_name;
    this.age = gast.age;
};

Gast.create = (newGast, result) => {
    sql.query("INSERT INTO guest SET ?", newGast, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created gast: ", {id: res.insertId, ...newGast});
        result(null, {id: res.insertId, ...newGast});
    });
};

Gast.getAll = result => {
    sql.query("SELECT * FROM guest", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("gast: ", res);
        result(null, res);
    });
};


module.exports = Gast;
