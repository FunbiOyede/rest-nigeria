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
  fs.readFile(StateData, "utf8", (err, data) => {
    const parsedState = JSON.parse(data);
    const stateResponse = parsedState.filter(
      state => state.capital === queryParam
    );

    if (!stateResponse) {
      res.status(404).send("not found");
    } else {
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
    const parsedState = JSON.parse(data);
    const stateResponse = parsedState.filter(
      state => state.name === queryParam
    );
    res.status(200).send(stateResponse);
    if (!stateResponse) {
      res.status(404).send("not found");
    } else {
      res.status(200).send(stateResponse);
    }
  });
};

const isoCode = (req, res) => {
  const queryParam = req.params.code;

  fs.readFile(StateData, "utf8", (err, data) => {
    const parsedState = JSON.parse(data);
    const codeResponse = parsedState.filter(state => state.code === queryParam);

    if (!codeResponse) {
      res.status(404).send("not found");
    } else {
      res.status(200).send(codeResponse);
    }
  });
};

module.exports = {
  getAllStates,
  capitalCity,
  stateName,
  isoCode
};
