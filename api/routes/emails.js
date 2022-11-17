const express = require("express");
const { sendEmail, readNewEmails } = require("../controllers/emails");

const router = express.Router();

router.route("/").post(sendEmail);

router.route("/").get(readNewEmails);

module.exports = router;
