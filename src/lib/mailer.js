import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async ({
  to,
  subject,
  html,
}) => {
  return transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to,
    subject,
    html,
  });
};