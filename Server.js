const http = require("http");
const app = require("./App");
require('dotenv').config()
const server = http.createServer(app);

server.listen(process.env.PORT || process.env.DEV_PORT, () => {
  console.log("server started");
});
