const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.post("/send_email", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Wszystkie pola są wymagane." });
  }

  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "Nieprawidłowy format adresu e-mail." });
  }

  const mailOptions = {
    from: name,
    email,
    to: "info@petidea.pet",
    subject: "Nowa wiadomość z formularza kontaktowego",
    text: `Name: ${name}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res
        .status(500)
        .json({ error: "Wystąpił błąd podczas wysyłania wiadomości." });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ success: "Wiadomość wysłana pomyślnie." });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
