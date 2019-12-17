const http = require("http");
const app = require("./App");
const server = http.createServer(app);

server.listen(9000, () => {
  console.log("server started");
});
