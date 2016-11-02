var nodemailer = require("nodemailer");
var colors = require("colors");

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'polleasemessages@gmail.com',
        pass: '1234bonds'
    }
};

//This is the email transporter
var transporter = nodemailer.createTransport(smtpConfig);
transporter.verify(function(error, success) {
   if (error) {
      console.log(colors.red.bold("Error logging into email: \n"));
        console.log(error);
   } else {
        console.log(colors.green('Connected to email server under '+smtpConfig.auth.user+'\n'));
   }
});

/* Options = json

  from: this will always be us.
  to: comma separated
  subject: the subject
  html: the html of the email
  text: this is a fallback version
  attachments: this is like attachable files and embedded images
*/
//pretty self explanatory.
function sendEmail(options){
    options.from = options.from ? options.from : smtpConfig.auth.user;
    
    transporter.sendMail(options, function(err,info){
        //Do we really need to handler errors with sending emails?  Probably not tbh
    });
};

module.exports = sendEmail;
