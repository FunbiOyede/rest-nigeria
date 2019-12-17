const express = require('express');
const cors = require('cors');

const notFoundHandler = require('./Middleware/notFound');
const Router = require('./Routes/Routes');

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.json({ message: 'Hello friend' });
});

app.use('/v1/api', Router);
app.use(notFoundHandler);

module.exports = app;
