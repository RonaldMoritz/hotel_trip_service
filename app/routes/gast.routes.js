module.exports = app => {
    const gast = require("../controllers/gast.controller.js");

    let router = require("express").Router();

    // Create a new gast
    router.post("/", gast.create);

    // Retrieve all gaste
    router.get("/", gast.findAll);

    app.use('/api/gast', router);
};