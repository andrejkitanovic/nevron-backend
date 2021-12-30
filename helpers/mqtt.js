const mqtt = require("mqtt");
const { postPosition } = require("../controllers/position");
const objectValues = {
  0: "lat",
  1: "lng",
  2: "speed",
};

const mqtClient = mqtt.connect(`mqtt://${global.host}:1883`);

mqtClient.on("connect", function () {
  mqtClient.subscribe("GPS", function (err) {
    if (err) {
      console.log(err);
    }
  });
});

mqtClient.on("message", function (topic, message) {
  const jsonResult = JSON.parse(message.toString());

  object = {};

  jsonResult.forEach((element, index) => {
    object[objectValues[index]] = Object.values(element)[1][0];
  });

  global.io.emit("GPS", object);
  console.log(object);

  postPosition(object);
});
