const express = require("express");
const cors = require("cors");
const http = require("http");
const notFoundHandler = require("./Middleware/notFound");
const CountryRouter = require("./Routes/Country");
const app = express();

app.use(cors());
// app.use(express.static(path.join(__dirname, "Public")));

// app.use("/", (req, res, next) => {
//   res.status(200).send("hello from nigeria");
//   next();
// });

app.use("/api", CountryRouter);
app.use(notFoundHandler);
const server = http.createServer(app);

server.listen(9000, () => {
  console.log("jjfjnjndjf");
});
