"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DocumentOperation extends Model {
    static associate(models) {
      this.belongsTo(models.Client, { as: "client" });
      this.belongsTo(models.Supplier, { as: "supplier" });
    }
  }
  DocumentOperation.init(
    {
      emailStatus: DataTypes.ENUM("NONE", "SENT", "DOCUMENTS_RECEIVED"),
    },
    {
      sequelize,
      modelName: "DocumentOperation",
    }
  );
  return DocumentOperation;
};
