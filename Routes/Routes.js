const express = require("express");

const Router = express.Router();
const getCountry = require("../Controllers/Country");
const stateController = require("../Controllers/States");

// nigeria ==> GET NIGERIA'S DATA
Router.get("/nigeria", getCountry);
// states ==> GET ALL STATES DATA IN NIGERIA
Router.get("/states", stateController.AllStates);
// state ==> SEARCH BY STATE NAME
Router.get("/state", stateController.searchStateByName);
// state ==> GET LGA BY STATE NAME
Router.get("/state/:name/lga", stateController.stateLocalGovernment);
// state ==> GET EMERGENCY PHONE NUMBER BY STATE NAME
Router.get("/state/:name/phone", stateController.emergencyPhone);
// state ==> GET ISO CODE BY STATE NAME
Router.get("/state/code/:code", stateController.isoCode);

// state ==> SEARCH BY CAPITAL CITY 
Router.get("/state/capital",stateController.searchByCaptial)

module.exports = Router;
