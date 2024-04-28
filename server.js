const http = require("http");
var https = require("https");
var fs = require("fs");

const app = require("./app");
const port = process.env.PORT || 9010;
const server = http.createServer(app);
server.listen(process.env.PORT || port, () => {
  console.log("API iniciada na porta:", port);
});
