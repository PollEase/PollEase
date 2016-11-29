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
    var times = req.body.times;

    var description = req.body.description;

    var recipient_emails = req.body.emails;
    var cost = req.body.coverCharge;

    console.log("email: " + email + "\n");
    console.log("name: " + name + "\n");
    console.log("event_title: " + event_title + "\n");
    console.log("deadline: " + deadline + "\n");

    console.log("locations: " + locations + "\n");
    console.log("times: " + times + "\n");

    console.log("description: " + description + "\n");

    console.log("recipient_emails: " + recipient_emails + "\n");
    console.log("cost: " + cost + "\n");

    if(email && validator.isEmail(email) && name !=null && description != null && event_title != null && deadline != null){
      //create users uid
      var uid = crypto.randomBytes(32).toString("hex");


            function part_three(poll_id){
              //0 represents location
              for(var i = 0; i < locations.length; i++){
                sql.createOption(poll_id,locations[i],0);
              }

              //1 represents date.
              for(var i = 0; i < times.length; i++){
                sql.createOption(poll_id,times[i],1);
              }

            }

      function next_part(){
        var poll_id = sql.createPoll(event_title,uid,deadline,description,cost,part_three);
        // res.send(JSON.stringify({"voteLink":"localhost:8000/getPoll?id="+uid+"&pollId="+poll_id,"shareLink": "localhost:8000/results?pollId="+poll_id}));
        //
        var options = {};
        options.to = email;
        options.subject = "PollEase Event Poll Invite";
        options.text="Click here to vote:\nhttp://localhost:8000/app/components/event-voting-form/event-voting-form.component.html?pollId="+poll_id+"&id="+uid+"\n\nCheck here for results\n";
        options.text=options.text+"http://localhost:8000/app/components/poll-results-form/poll-results-form.component.html?pollId="+poll_id;
        sendmail(JSON.parse(JSON.stringify(options)));

        for(var i = 0; i < recipient_emails.length; i++){
            var user_email = recipient_emails[i];

            if(validator.isEmail(user_email)){
              var u_uid = crypto.randomBytes(32).toString("hex");
              sql.createUser(user_email, u_uid, "");

              options.to = user_email;
              options.text="Click here to vote:\nhttp://localhost:8000/app/components/event-voting-form/event-voting-form.component.html?pollId="+poll_id+"&id="+uid;
              sendmail(JSON.parse(JSON.stringify(options)));
          }


        }
      }

      //polls uid
      sql.createUser(email,uid,name,next_part);
      }      
      else {

        res.send('{"status":0}');
        return;
      }

}

var exports = {};
exports.post = post;
module.exports = exports;
