const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Destination extends Model {}

Destination.init(
  {
		title: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Destination;
