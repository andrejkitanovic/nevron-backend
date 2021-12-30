require("dotenv").config();
const express = require("express");
const cors = require("cors");

global.app = express();
global.app.use(cors());

global.port = process.env.PORT || 8080;
global.host = process.env.HOST || "212.103.140.194";

require("./helpers/headers");
require("./helpers/error");
require("./helpers/connection");
require("./routes");
require("./helpers/socket");
require("./helpers/mqtt");
