const { head } = require("lodash");

const { DocumentOperation } = require("../models");
const { sendEmail } = require("../utils/sendEmail");
const { readEmails } = require("../utils/readEmail");

exports.sendEmail = async (req, res) => {
  try {
    const emailInfo = await sendEmail(req.body);
    const updatedOperation = await DocumentOperation.update(
      {
        emailDeliveryStatus: "SENT",
      },
      {
        where: { id: req.body.id },
      }
    );
    res.send({ emailInfo, updatedOperation });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};

exports.readNewEmails = async (req, res) => {
  try {
    const parseEmail = (email) => {
      const regExp = /\<(.*)\>/g;
      return head(regExp.exec(email)).slice(1, -1);
    };

    const getUniqueEmailsWithAttachments = (emails) => {
      const attachmentsByEmail = {};
      emails
        .map((email) => ({
          header: {
            from: parseEmail(head(email.header.from)),
            subject: head(email.header.subject),
            date: head(email.header.date),
          },
          attachments: email.attachments,
        }))
        .forEach((email) => {
          attachmentsByEmail[email.header.from] = attachmentsByEmail[
            email.header.from
          ]
            ? [...attachmentsByEmail[email.header.from], ...email.attachments]
            : email.attachments;
        });
      return Object.entries(attachmentsByEmail).map(([email, attachments]) => ({
        email,
        attachments,
      }));
    };

    const cb = async (emails) => {
      const preparedEmails = getUniqueEmailsWithAttachments(emails);
      res.send(preparedEmails);
    };
    await readEmails(cb);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred",
    });
  }
};
