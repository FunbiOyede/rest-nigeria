const http = require("http");
const app = require("./App");
require('dotenv').config()
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("server started");
});
