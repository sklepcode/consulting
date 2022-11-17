const { Supplier } = require("../models");

exports.findAll = async (req, res) => {
  try {
    const data = await Supplier.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await Supplier.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};
