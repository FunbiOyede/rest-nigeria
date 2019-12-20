const toSentenceCase = word => {
  let result = word.charAt(0).toUpperCase();
  return word.replace(word.charAt(0), result);
};
module.exports = toSentenceCase;
