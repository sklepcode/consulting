module.exports.READ_MAIL_CONFIG = {
  user: "consulting.sidorov@gmail.com",
  password: "jshjivndnezlbhrt",
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false },
};

module.exports.SEND_MAIL_CONFIG = {
  service: "gmail",
  auth: {
    user: "consulting.sidorov@gmail.com",
    pass: "jshjivndnezlbhrt",
  },
};
