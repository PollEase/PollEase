var sql = require("./../db/sql.js");
var sendmail = require("./sendmail.js");
var url = require("url");

function post(req,res){
    var mail_options = {
        to:address,
        html:"<b>Hello From polleasemessages@gmail.com!</b>",
        text:"Hello from polleasemessages@gmail.com"
    };
    //sql("",function(err,rows){
      sendmail(mail_options);
    //});
    res.send("mail sent to "+address);
}

function get(req,res){
  var address = url.parse(req.url, true).query.email;
  var mail_options = {
      to:address,
      subject:"Hello Email",
      html:"<b>Hello From polleasemessages@gmail.com!</b>",
      text:"Hello from polleasemessages@gmail.com"
  };
  //sql("",function(err,rows){
    sendmail(mail_options);
  //});
  res.send("mail sent to "+address);
}

exports = {};
exports.post = post;
exports.get = get;

module.exports = exports;
