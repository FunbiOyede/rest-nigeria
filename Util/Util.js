const getValue = (key, array) => {
  for (let el in array) {
    if (array[el].hasOwnProperty(key)) {
      return JSON.parse(array[el][key]);
    }
  }
};

module.exports = getValue;
