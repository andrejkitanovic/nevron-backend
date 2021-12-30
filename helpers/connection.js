const { Sequelize } = require("sequelize");
const http = require("http");

global.sequelize = new Sequelize("nevron", "nevron", "centos", {
  host: "212.103.140.194",
  dialect: "mariadb",
});
global.sequelize.sync();

global.server = http.createServer(global.app);

server.listen(global.port, global.host, () => {
  console.log(`listening on ${global.port}`);
});
