module.exports = app => {
    const trip = require("../controllers/trip.controller.js");

    let router = require("express").Router();

    // Create a new Trip
    router.post("/", trip.create);

    // Retrieve all trips
    router.get("/", trip.findAll);

    app.use('/api/trip', router);
};