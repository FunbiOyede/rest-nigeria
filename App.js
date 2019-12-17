const express = require("express");
const cors = require("cors");

const notFoundHandler = require("./Middleware/notFound");
const Router = require("./Routes/Routes");

const app = express();

app.use(cors());

app.use(Router);
app.use(notFoundHandler);

module.exports == app;
