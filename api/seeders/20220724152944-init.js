"use strict";

// consulting.ivanov@mail.ru UEO2Rao4u^rx (supplier)
// consulting.petrov@yandex.by UEO2Rao4u^rx (supplier)
// consulting.sidorov@gmail.com UEO2Rao4u^rx (client)

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Clients", [
      {
        companyName: "ИП Сидоров",
        contactName: "Сидоров С.С.",
        electronicDocumentManagement: true,
        phone: "74952128506",
        email: "consulting.sidorov@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("Suppliers", [
      {
        companyName: "ИП Иванов",
        contactName: "Иванов И.И.",
        electronicDocumentManagement: true,
        phone: "74952148090",
        email: "consulting.ivanov@mail.ru",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyName: "ИП Петров",
        contactName: "Петров П.С.",
        electronicDocumentManagement: true,
        phone: "74951008990",
        email: "consulting.petrov@yandex.by",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Suppliers", null, {});
    await queryInterface.bulkDelete("Clients", null, {});
  },
};
