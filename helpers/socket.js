const { Server } = require("socket.io");

global.io = new Server(global.server);
io.on("connection", (socket) => {
  console.log("a user connected");
});
