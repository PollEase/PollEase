
var sendmail = require("../helpers/sendmail.js");
var sql = require("../helpers/sql.js");

function post(req,res){
    var user_email = req.body.email;
    var events = [];
    sql.send_all_events(user_email,function(rows,fields){
      for(var i=0; i < rows.length; i++){
        events.push(rows[i]);
      }
    },
    function(){
      var options = {};
      options.to = user_email;
      options.subject = "Knock Knock open up its the PollEase.  We got a warrant.";
      options.text = "Here are all of your polls:\n";

      for(var i = 0; i < events.length; i++){
          var evt =  events[i];
          options.text+="Results: "+"localhost:8000/results?pollId="+evt.uid+"\n";
      }

      sendmail(options);
    });

    res.send(
      `{
        status:1
      }`
     );
}

var exports = {};
exports.post = post;
module.exports = exports;
