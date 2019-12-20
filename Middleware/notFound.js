// 404 handler
const notFound = (req, res) => {
  res.status(404).send({ err: 'endpoint not found' });
};

module.exports = notFound;
