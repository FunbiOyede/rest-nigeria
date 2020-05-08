const fs = require("fs");
const toSentenceCase = require("../Util/Util");
const StateData = "./Data/v1/States.json";

/**
 *
 * @param {object} req
 * @param {object} res
 * @description this function returns a json response containing all the states in nigeria
 */
const AllStates = (req, res) => {
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      res.status(400).json({status:false})
    } else {
      res.status(200).json({status:true, data:JSON.parse(data)});
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
      res.status(400).json({status:false})
    } else {
      const parsedState = JSON.parse(data);
      const localGovernment = parsedState
        .filter(state => state.name === queryParam)
        .map(state => state.lga);
        res.status(200).json({status:true, data:localGovernment});
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
      res.status(400).json({status:false})
    } else {
      const parsedState = JSON.parse(data);
      const emergencyPhoneNumbers = parsedState
        .filter(state => state.name === queryParam)
        .map(number => number.phones);
        res.status(200).json({status:true, data:emergencyPhoneNumbers});
    }
  });
};

/**
 *
 * @param {object} req
 * @param {object} res
 * @description  this function returns a json response data of a state
 */
const searchStateByName = (req, res) => {
  const { name } = req.query;
  const queryParam = toSentenceCase(name);
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      console.log(err)
      res.status(400).json({status:false})
    } else {
      const parsedState = JSON.parse(data);
       const stateResponse = parsedState.filter(state => state.name === queryParam );
      res.status(200).json({status:true, data:stateResponse});
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
  const { code } = req.params;
   const constantCode = `NG-${code.toUpperCase()}`
   
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      res.status(400).json({status:false})
    } else {
      const parsedState = JSON.parse(data);
      const codeResponse = parsedState
        .filter(state => state.code === constantCode)
     
        
      if(!codeResponse.length){
        res.status(404).json({status:false, message: "Sorry, does not exist",})
      }else{
        res.status(200).json({status:true, data:codeResponse});
      }
     
    }
  });
};


const searchByCaptial = (req,res) =>{
  const {capital} = req.query
  fs.readFile(StateData, "utf8", (err, data) => {
    if (err) {
      res.status(400).json({status:false})
    } else {
      const parsedState = JSON.parse(data);
      const codeResponse = parsedState
        .filter(state => state.capital === capital)
     
      if(!codeResponse.length){
        res.status(404).json({status:false, message: "Sorry, does not exist",})
      }else{
        res.status(200).json({status:true, data:codeResponse});
      }
       
    }
  });
}




module.exports = {
  AllStates,
  stateLocalGovernment,
  searchStateByName,
  isoCode,
  emergencyPhone,
  searchByCaptial
};
