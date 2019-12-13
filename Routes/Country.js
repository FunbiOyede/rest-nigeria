const express = require("express");
const fs = require("fs");

const Router = express.Router();

const CountryDate = "./Data/Country.json";

Router.get("/country", (req, res) => {
  fs.readFile(CountryDate, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).send(JSON.parse(data));
  });
});

module.exports = Router;
