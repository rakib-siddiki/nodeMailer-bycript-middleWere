// this is email verification file
const nodemailer = require("nodemailer");

async function sendEmailVerification(email) {
  console.log(email);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rmrakib901@gmail.com",
        pass: "nwidjipmagpfsznk",
      },
    });
    const mailOptions = {
      from: '"Fred Foo 👻" rmrakib901@gmail.com', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `   <div style="display: flex;  justify-content: center; height: 100vh; font-family: Arial, sans-serif;">
      <div>
        <img
          style="width: 120px; border-radius: 50%; margin-top:10px;"
          src="https://i.ibb.co/BjRbpxx/download.png"
          alt="image"
        />
      </div>
      <div
        id="signature"
        style="
          max-width: 500px;
          margin: 20px;
          border-bottom: 2px solid #333;
          padding-bottom: 10px;
        "
      >
        <p
          id="name"
          style="margin: 0; padding: 0; font-size: 18px; font-weight: bold"
        >
          Rakib Siddiki
        </p>
        <p id="title" style="margin: 0; padding: 0; color: #666">
          Web Developer 
        </p>
        <div id="contact" style="margin-top: 10px">
          <p style="margin: 0; padding: 0">
            Email:
            <a
              href="mailto:your.email@example.com"
              style="text-decoration: none; color: #007bff"
              >rmakib901@gmail.com</a
            >
          </p>
          <p style="margin: 0; padding: 0">Phone: +880 1768440404</p>
          <p style="margin: 0; padding: 0">
            Website:
            <a
              href="https://www.yourwebsite.com"
              target="_blank"
              style="text-decoration: none; color: #007bff"
              >https://protfolio-of-rakib.netlify.app/</a
            >
          </p>
        </div>
      </div>
    </div>`, // html body
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendEmailVerification;
