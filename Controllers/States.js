const fs = require("fs");

const StateData = "./Data/States.json";

/**
 *
 * @param {*} req
 * @param {*} res
 * @description get all state
 */
const getAllStates = (req, res) => {
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(JSON.parse(data));
    }
  });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @description search by capital
 */
const capitalCity = (req, res) => {
  const queryParam = req.params.capital.toLowerCase();
  console.log(queryParam);
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const parsedState = JSON.parse(data);
      const stateResponse = parsedState.filter(
        state => state.capital === queryParam
      );
      res.status(200).send(stateResponse);
    }
  });
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * @description search by state name
 */
const stateName = (req, res) => {
  const queryParam = req.params.name.toLowerCase();
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const parsedState = JSON.parse(data);
      const stateResponse = parsedState.filter(
        state => state.name === queryParam
      );
      res.status(200).send(stateResponse);
    }
  });
};

const isoCode = (req, res) => {};

module.exports = {
  getAllStates,
  capitalCity,
  stateName
};
