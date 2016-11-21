var sendmail = require("../helpers/sendmail.js");var crypto = require("crypto");
var sql = require("../helpers/sql.js");
var validator = require("validator");
var colors = require("colors");
function post(req,res){

    var email = req.body.creatorEmail;
    var name = req.body.creatorName;
    var event_title = req.body.eventTitle;
    var deadline = req.body.deadline;

    var locations = req.body.locations;
    var date = req.body.dateTime;

    var description = req.body.description;

    var recipient_emails = req.body.emails;
    var cost = req.body.coverCharge;

    if(email &&validator.isEmail(email) && name !=null && description != null && event_title != null && deadline != null){
      //create users uid
      var uid = crypto.randomBytes(32).toString("hex");


            function part_three(poll_id){
              //0 represents location
              for(var i = 0; i < locations.length; i++){
                sql.createOption(poll_id,locations[i],0);
              }

              //1 represents date.
              for(var i = 0; i < date.length; i++){
                sql.createOption(poll_id,date[i],1);
              }
              //sql.createEvent.
              /* Options = json

                to: comma separated
                subject: the subject
                html: the html of the email
                text: this is a fallback version
                attachments: this is like attachable files and embedded images
              */

            }

      function next_part(){
        var poll_id = sql.createPoll(event_title,uid,deadline,description,cost,part_three);
        res.send(JSON.stringify({"shareLink": "localhost:8000/getPoll?id="+uid+"&pollId="+poll_id}));

        var options = {};
        options.to = email;
        options.subject = "Knock Knock open up its the PollEase.  We got a warrant.";
        options.text = "Click here to not go to jail "+ "localhost:8000/getPoll?id="+uid+"&pollId="+poll_id;
        sendmail(JSON.parse(JSON.stringify(options)));

        for(var i = 0; i < recipient_emails.length; i++){
            var user_email = recipient_emails[i];

            if(validator.isEmail(user_email)){
              var u_uid = crypto.randomBytes(32).toString("hex");
              sql.createUser(user_email, u_uid, "");

              options.to = user_email;
              options.text = "Click here to not go to jail "+ "localhost:8000/getPoll?id="+u_uid+"&poll_id="+poll_id;
              sendmail(JSON.parse(JSON.stringify(options)));
          }


        }
      }

      //polls uid
      sql.createUser(email,uid,name,next_part);

      }      else{
              res.send(email + " IS NOT A VALID EMAIL STOP TRYING TO HACK US");
              return;
            }

}

var exports = {};
exports.post = post;
module.exports = exports;
