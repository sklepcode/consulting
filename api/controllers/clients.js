const { Client } = require("../models");

exports.findAll = async (req, res) => {
  try {
    const data = await Client.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};

exports.create = async (req, res) => {
  try {
    const data = await Client.create(req.body);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};
