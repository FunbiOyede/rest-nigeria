const http = require("http");
const app = require("./App");
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const server = http.createServer(app);

server.listen(process.env.PORT || process.env.DEV_PORT, () => {
  console.log("server started");
  console.log(process.env.NODE_ENV)
});
