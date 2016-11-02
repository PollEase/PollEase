var sendemail = require("../helpers/sendmail.js");
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

    if(validator.isEmail(email)){
      var uid = crypto.randomBytes(16).toString("hex");
      sql.createUser(email,uid);
    }
    else{
      res.send(email + " IS NOT A VALID EMAIL STOP TRYING TO HACK US")
      return;
    }

    res.send(`{
      "shareLink": "htp://dbgui1.com/event/poll/{pollId}",
      "creatorLink": "http://dbgui1.com/event/edit"
    }`);
}

var exports = {};
exports.post = post;
module.exports = exports;
