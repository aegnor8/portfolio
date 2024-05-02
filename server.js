process.env.NODE_ENV = process.env.NODE_ENV || "development";
const express = require("./config/express");
const http = require("http");
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;
