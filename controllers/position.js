const { QueryTypes } = require("sequelize");
const Position = require("../models/position");

module.exports.postPosition = (body) => {
  (async function () {
    const position = await Position.create({
      ...body,
    });
  })();
};

module.exports.getPositions = (req, res, next) => {
  (async function () {
    const positions = await global.sequelize.query("SELECT * FROM Positions", {
      type: QueryTypes.SELECT,
    });

    res.json(positions.map((position) => [position.lat, position.lng]));
  })();
};

module.exports.resetPositions = (req, res, next) => {};
