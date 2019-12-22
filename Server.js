const http = require("http");
const app = require("./App");

const server = http.createServer(app);

server.listen(process.env.PORT || 7000, () => {
  console.log("server started");
});
