module.exports = app => {
    const buchung = require("../controllers/buchung.controller.js");

    let router = require("express").Router();

    // Create a new buchung
    router.post("/", buchung.create);

    // Retrieve all buchungen
    router.get("/", buchung.findAll);

    app.use('/api/buchung', router);
};