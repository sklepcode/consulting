const { toUpper } = require("lodash");
const fs = require("fs");
const Imap = require("imap");
const { Base64Decode } = require("base64-stream");

const { READ_MAIL_CONFIG } = require("../config/email");

const imap = new Imap(READ_MAIL_CONFIG);

const readEmails = async (cb) => {
  const parsedHeaders = [];
  const parsedAttachments = [];
  imap.once("ready", function () {
    imap.openBox("INBOX", true, function (err, box) {
      if (err) throw err;
      const fetch = imap.seq.fetch("1:*", {
        bodies: ["HEADER.FIELDS (FROM SUBJECT DATE)"],
        struct: true,
      });
      fetch.on("message", function (msg) {
        msg.on("body", function (stream) {
          let buffer = "";
          stream.on("data", function (chunk) {
            buffer += chunk.toString();
          });
          stream.once("end", function () {
            const email = Imap.parseHeader(buffer);
            parsedHeaders.push(email);
          });
        });
        msg.once("attributes", function (attrs) {
          const attachments = findAttachmentParts(attrs.struct);
          parsedAttachments.push(
            attachments.map(
              (attachment) => `${attrs.uid}_${attachment.params.name}`
            )
          );
          for (let i = 0; i < attachments.length; i++) {
            const attachment = attachments[i];
            const f = imap.fetch(attrs.uid, {
              bodies: [attachment.partID],
              struct: true,
            });
            f.on("message", buildAttMessageFunction(attachment, attrs.uid));
          }
        });
      });
      fetch.once("end", function () {
        imap.end();
      });
    });
  });

  imap.once("end", function () {
    const emails = parsedHeaders.map((header, index) => ({
      header,
      attachments: parsedAttachments[index],
    }));
    cb(emails);
  });

  imap.connect();

  function findAttachmentParts(struct, attachments = []) {
    for (let i = 0; i < struct.length; i++) {
      if (Array.isArray(struct[i])) {
        findAttachmentParts(struct[i], attachments);
      } else {
        if (
          struct[i].disposition &&
          ["INLINE", "ATTACHMENT"].indexOf(
            toUpper(struct[i].disposition.type)
          ) > -1
        ) {
          attachments.push(struct[i]);
        }
      }
    }
    return attachments;
  }

  function buildAttMessageFunction(attachment, uid) {
    const filename = `${uid}_${attachment.params.name}`;
    const encoding = attachment.encoding;

    return (msg) => {
      msg.on("body", function (stream) {
        const writeStream = fs.createWriteStream(`attachments/${filename}`);
        if (toUpper(encoding) === "BASE64") {
          stream.pipe(new Base64Decode()).pipe(writeStream);
        } else {
          stream.pipe(writeStream);
        }
      });
    };
  }
};

exports.readEmails = readEmails;
