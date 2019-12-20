const express = require("express");

const Router = express.Router();
const getCountry = require("../Controllers/Country");
const stateController = require("../Controllers/States");

// nigeria ==> GET NIGERIA'S DATA
Router.get("/nigeria", getCountry);
// states ==> GET ALL STATES DATA IN NIGERIA
// Router.get('/states', stateController.AllStates);
Router.get("/states", stateController.AllStates);
// state ==> GET A STATE
Router.get("/state/:name", stateController.getState);
// state ==> GET LGA BY STATE NAME
Router.get("/state/:name/lga", stateController.stateLocalGovernment);
// state ==> GET EMERGENCY PHONE NUMBER BY STATE NAME
Router.get("/state/:name/phone", stateController.emergencyPhone);
// state ==> GET ISO CODE BY STATE NAME
Router.get("/state/:name/code", stateController.isoCode);

module.exports = Router;
