const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const notFoundHandler = require("./Middleware/notFound");
const Router = require("./Routes/Routes");

const app = express();

app.use(cors());

app.use(Router);
app.use(notFoundHandler);
const server = http.createServer(app);

server.listen(9000, () => {
  console.log("jjfjnjndjf");
});
