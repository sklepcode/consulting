const { DocumentOperation, Client, Supplier } = require("../models");

exports.findAll = async (req, res) => {
  try {
    const data = await DocumentOperation.findAll({
      attributes: {
        exclude: ["clientId", "supplierId", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Client,
          as: "client",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Supplier,
          as: "supplier",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred",
    });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await DocumentOperation.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};
