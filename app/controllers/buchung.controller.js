const Buchung = require("../models/buchung.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a booking
    const patient = new Buchung({

        //  id : req.body.id,
        trip: req.body.trip,
        guest: req.body.guest

    });

    // Save booking in the database
    Buchung.create(patient, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the booking."
            });
        else res.send(data);
    });
};


exports.findAll = (req, res) => {
    Buchung.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving booking."
            });
        else res.send(data);
    });
};

exports.delete = (req, res) => {
    Buchung.getJOIN((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving booking."
            });
        else res.send(data);
    });
};