const express = require("express");
const path = require("path");
const Router = express.Router();
const countryController = require("../Controllers/Country");
const stateController = require("../Controllers/States");

Router.get("/", (req, res) => {
  res.send("hello");
});

Router.get("/v1/api/country", countryController);

Router.get("/v1/api/states", stateController.getAllStates);
Router.get("/v1/api/states/capital", stateController.capitalCity);

module.exports = Router;
