const fs = require("fs");
const CountryData = "./Data/Country.json";

const getCountry = (req, res) => {
  fs.readFile(CountryData, "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    res.status(200).send(JSON.parse(data));
  });
};

module.exports = getCountry;
