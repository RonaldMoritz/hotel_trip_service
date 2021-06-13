const Trip = require("../models/trip.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Trip
    const patient = new Trip({

        //  id : req.body.id,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        start_date: req.body.start_date,
        start_time: req.body.start_time,
        end_date: req.body.end_date,
        end_time: req.body.end_time

    });

    // Save Trip in the database
    Trip.create(patient, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Trip."
            });
        else res.send(data);
    });
};


exports.findAll = (req, res) => {
    Trip.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving trips."
            });
        else res.send(data);
    });
};