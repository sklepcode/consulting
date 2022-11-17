const nodemailer = require("nodemailer");
const { SEND_MAIL_CONFIG } = require("../config/email");

const transporter = nodemailer.createTransport(SEND_MAIL_CONFIG);

const sendEmail = async (payload) => {
  const message = {
    from: payload.client.name,
    to: payload.supplier.email,
    subject: "Запрос в бухгалтерию (закрывающие документы)",
    html: `
      <p>Добрый день.</p>
      
      <p>Компания <b>«${payload.client.name}»</b> направляет запрос в <b>«${payload.supplier.name}»</b> и просит
      предоставить пакет с закрывающими документами за оказываемые услуги
      (предоставление товаров) по форме: счет-фактура, УПД или акт выполненных работ.
      Акт сверки направлен по системе ЭДО. Просим его принять.</p>
      
      <i>С уважением,
      <br>
      Екатерина Конюхова
      <br>
      Финансовый менеджер</i>
    `,
  };
  return await transporter.sendMail(message);
};

exports.sendEmail = sendEmail;
