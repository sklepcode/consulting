"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DocumentOperations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Clients",
          },
          key: "id",
        },
        allowNull: false,
      },
      supplierId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Suppliers",
          },
          key: "id",
        },
        allowNull: false,
      },
      emailStatus: {
        allowNull: false,
        type: Sequelize.ENUM("NONE", "SENT", "DOCUMENTS_RECEIVED"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DocumentOperations");
  },
};
