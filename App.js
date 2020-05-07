const express = require("express");
const cors = require("cors");

const notFoundHandler = require("./Middleware/notFound");
const Router = require("./Routes/Routes");

const app = express();

app.use(cors());

app.use("/v1/api", Router);
app.get("/health",(req, res) => {
  res.status(200).json({status:'UP',uptime:process.uptime(), time: Date.now().toString()});
});
app.use(express.static(__dirname + "/Public"));

app.use("/", (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
  next();
});

app.use(notFoundHandler);

module.exports = app;
