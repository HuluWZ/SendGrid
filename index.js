const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'danohailu11@gmail.com',
  from: 'hulunlante.w@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending Mail with Twilio SendGrid ', // Subject of  A Mail
  text: 'Hey Dano, it is easy to do anywhere, even with Node.js', // The  text to be sent
  html: '<strong> and easy to do anywhere, even with Node.js</strong><p>For TEST PURPOSE ONLY , DANO </p>',
  // HTML Embedding with a message to be sent
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent Successfully ✌️')
  })
  .catch((error) => {
    console.error(error)
  })