const Gast = require("../models/gast.model.js");


exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a guest
    const patient = new Gast({

        //  id : req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age

    });

    // Save guest in the database
    Gast.create(patient, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the guest."
            });
        else res.send(data);
    });
};


exports.findAll = (req, res) => {
    Gast.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving guests."
            });
        else res.send(data);
    });
};