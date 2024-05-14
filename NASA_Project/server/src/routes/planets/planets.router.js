

const express = require("express");
const { httpGetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

// Define route handler for GET request to "/planets"
planetsRouter.get("/", (req, res) => {
    // Call httpGetAllPlanets function and pass request and response objects
    return httpGetAllPlanets(req, res);
});

module.exports = planetsRouter;