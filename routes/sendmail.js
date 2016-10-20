var express = require('express');
var nodemailer = require("nodemailer");
var colors = require("colors");

var router = express.Router();

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'polleasemessages@gmail.com',
        pass: '1234bonds'
    }
};

var transporter = nodemailer.createTransport(smtpConfig);


transporter.verify(function(error, success) {
   if (error) {
      console.log(colors.red.bold("Error logging into email: \n"));
        console.log(error);
   } else {
        console.log(colors.green('Connected to email server under '+smtpConfig.auth.user+'\n'));
   }
});

router.post("/email",function(req,res,err){

});

module.exports = router;
