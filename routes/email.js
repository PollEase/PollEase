
var sendmail = require("../helpers/sendmail.js");
var sql = require("../helpers/sql.js");

function post(req,res){
    var user_email = req.email;

    sql.get_all_events(user_email,function(rows,fields){

            var options = {};
            options.to = user_email;
            options.subject = "Knock Knock open up its the PollEase.  We got a warrant.";
            options.text = "Here are all of your polls\n";

            for(var i = 0; i < rows.length; i++){
                var evt = rows[i];
                options.text+=evt.name+'\n'+"Edit: "+"localhost:8000/editPoll?event_id="+evt.event_id+'\n';
                options.text+="Results: "+"localhost:8000/results?event_id="+evt.event_id+"\n\n";
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
