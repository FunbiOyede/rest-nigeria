const fs = require('fs');

const CountryData = './Data/v1/Country.json';

/**
 *
 * @param {object} req
 * @param {object} res
 * @description this function returns a json response data about nigeria
 */
const getCountry = (req, res) => {
  fs.readFile(CountryData, 'utf8', (err, data) => {
    if (err) {
      res.status(400).json({status:false})
    }
    res.status(200).json({status:true, data:JSON.parse(data)});
  
    

  });
};

module.exports = getCountry;
