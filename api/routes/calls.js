const express = require("express");
const { sendVoiceMessage } = require("../controllers/calls");

const router = express.Router();

router.route("/").post(sendVoiceMessage);

module.exports = router;
