"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      //
    }
  }
  Client.init(
    {
      companyName: DataTypes.STRING,
      contactName: DataTypes.STRING,
      electronicDocumentManagement: DataTypes.BOOLEAN,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
