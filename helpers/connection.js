const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");
const http = require("http");

global.sequelize = new Sequelize("nevron", "nevron", "centos", {
  host: "212.103.140.194",
  dialect: "mariadb",
});
global.sequelize.sync()

global.server = http.createServer(global.app);

server.listen(global.port, () => {
  console.log(`listening on ${global.port}`);
});
