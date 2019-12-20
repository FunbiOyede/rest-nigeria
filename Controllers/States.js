const fs = require("fs");
const toSentenceCase = require("../Util/Case");
const StateData = "./Data/States.json";

/**
 *
 * @param {object} req
 * @param {object} res
 * @description this function returns a json response containing all the states in nigeria
 */
const AllStates = (req, res) => {
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
 * @param {object} req
 * @param {object} res
 * @description this function returns a json response containing all the local government in a state
 */
const stateLocalGovernment = (req, res) => {
  const { name } = req.params;
  const queryParam = toSentenceCase(name);
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const parsedState = JSON.parse(data);
      const localGovernment = parsedState
        .filter(state => state.name === queryParam)
        .map(state => state.lga);
      res.status(200).send(localGovernment);
    }
  });
};

/**
 *
 * @param {object} req
 * @param {object} res
 * @description this function returns a json response containing
 * all the emergency phone numbers in a state
 *
 */
const emergencyPhone = (req, res) => {
  const { name } = req.params;
  const queryParam = toSentenceCase(name);
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const parsedState = JSON.parse(data);
      const emergencyPhoneNumbers = parsedState
        .filter(state => state.name === queryParam)
        .map(number => number.phones);

      res.status(200).send(emergencyPhoneNumbers);
    }
  });
};

/**
 *
 * @param {object} req
 * @param {object} res
 * @description  this function returns a json response data of a state
 */
const getState = (req, res) => {
  const { name } = req.params;
  const queryParam = toSentenceCase(name);
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

/**
 *
 * @param {object} req
 * @param {object} res
 * @description this function returns a json response containing a state iso code
 */
const isoCode = (req, res) => {
  const { name } = req.params;
  const queryParam = toSentenceCase(name);

  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      const parsedState = JSON.parse(data);
      const codeResponse = parsedState
        .filter(state => state.name === queryParam)
        .map(iso => iso.code);
      res.status(200).send(codeResponse);
    }
  });
};

module.exports = {
  AllStates,
  stateLocalGovernment,
  getState,
  isoCode,
  emergencyPhone
};
