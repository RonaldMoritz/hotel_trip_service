const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
    origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({message: "TripService REST-Server."});
});

require("./app/routes/trip.routes")(app);
require("./app/routes/buchung.routes")(app);
require("./app/routes/gast.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
    console.log(`REST-Server is running on port ${PORT}.`);
});
