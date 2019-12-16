const fs = require("fs");

const StateData = "./Data/States.json";

const getAllStates = (req, res) => {
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
};

const capitalCity = (req, res) => {
  let queryName = req.query.q;

  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      //filter states.json data get by capital city
    }
  });
};

module.exports = {
  getAllStates,
  capitalCity
};
