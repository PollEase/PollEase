var sendmail = require("../helpers/sendmail.js");
var crypto = require("crypto");
var sql = require("../helpers/sql.js");
var validator = require("validator");

function post(req,res){
    var email = req.body.creatorEmail;
    var name = req.body.creatorName;
    var event_title = req.body.eventTitle;
    var deadline = req.body.pollDeadline;
    var locations = req.body.locations;
    var date = req.body.dateTime;
    var transportation = req.body.transportation;
    var funding = req.body.funding;
    var description = req.body.description;
    var recipient_emails = req.body.emails;

    if(validator.isEmail(email) && name !=null && description != null && event_title != null){
      var uid = crypto.randomBytes(32).toString("hex");

      //polls uid
      sql.createUser(email,uid);
      sql.createEvent(event_title,uid,description);



      //sql.createEvent.
      /* Options = json

        to: comma separated
        subject: the subject
        html: the html of the email
        text: this is a fallback version
        attachments: this is like attachable files and embedded images
      */
      var options = {};
      options.to = email;
      options.subject = "Knock Knock open up its the PollEase.  We got a warrant.";
      options.text = "Click here to not go to jail "+ "localhost:8000/editPoll?id="+uid;
      sendmail(options);
    }
    else{
      res.send(email + " IS NOT A VALID EMAIL STOP TRYING TO HACK US")
      return;
    }

    res.send(`{
      "shareLink": "htp://dbgui1.com/event/poll/{pollId}",
      "creatorLink": "http://dbgui1.com/event/edit"
    }\n`);
}

var exports = {};
exports.post = post;
module.exports = exports;
