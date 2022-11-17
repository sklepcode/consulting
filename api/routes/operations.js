const express = require("express");
const { findAll, create } = require("../controllers/operations");

const router = express.Router();

router.route("/").get(findAll).post(create);

module.exports = router;
