const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sanjaykumar322006@gmail.com",
    pass: "qyhdldemgakoqmjh",
  },
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "pm342352@gmail.com",
    to: "sanjaykumar322006@gmail.com",
    subject: "📩 New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Email error:", error);
      return res.status(500).json({ message: "Error sending email" });
    }
    console.log("✅ Email sent: " + info.response);
    res.json({ message: "Message received! We'll contact you soon." });
  });
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
