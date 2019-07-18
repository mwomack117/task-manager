const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "michael.womack84@gmail.com",
    subject: "Welcome to the Task Manager app!",
    text: `Welcome to the App, ${name}. Let me know how you are liking the app.`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "michael.womack84@gmail.com",
    subject: "Sorry to see you go.",
    text: `Goodbye ${name}😞. Could you please tell us what we could have done better?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
};
