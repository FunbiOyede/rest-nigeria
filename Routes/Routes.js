const express = require("express");
const Router = express.Router();
const country = require("../Controllers/Country");
const stateController = require("../Controllers/States");

Router.get("/", (req, res) => {
  res.send("hello");
});

Router.get("/country", country);
Router.get("/states", stateController.getAllStates);
Router.get("/state/:capital", stateController.capitalCity);
Router.get("/states/:name", stateController.stateName);
Router.get("/state/iso/:code", stateController.isoCode);
module.exports = Router;
