'use strict';

module.exports = function (sequelize, DataTypes) {
  var Card = sequelize.define('card', {
    id: {
      type: DataTypes.STRING(32),
      primaryKey: true
    },
    card_no: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cvv: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    expiry_year: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    expiry_month: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    pin: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    success_response: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    failure_response: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    card_is_valid: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }
  });
  return Card;
};