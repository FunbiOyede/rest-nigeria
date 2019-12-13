const notFound = (req, res, next) => {
  res.status(404).send({ err: "endpoint not found" });
};

module.exports = notFound;
