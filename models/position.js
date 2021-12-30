const { DataTypes } = require("sequelize");

const Position = global.sequelize.define(
  "Position",
  {
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    lng: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    speed: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.export = Position;
