const { QueryTypes } = require("sequelize");
const Position = require("../models/position");

module.exports.postPosition = (req, res, next) => {
  (async function () {
    const position = await Position.create({
      ...req.body,
    });

    res.json({
      data: position,
    });
  })();
};

module.exports.getPositions = (req, res, next) => {
  (async function () {
    const positions = await global.sequelize.query("SELECT * FROM positions", {
      type: QueryTypes.SELECT,
    });
  })();
};

module.exports.resetPositions = (req, res, next) => {};
