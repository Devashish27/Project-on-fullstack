// models/temperatureLabel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const TemperatureLabel = sequelize.define("TemperatureLabel", {
  min_temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TemperatureLabel;
