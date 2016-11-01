var sendemail = require("../helpers/sendmail.js");

function post(req,res){
    var email = req.body.creatorEmail;
    var name = req.body.creatorName;
    var eventTitle = req.body.eventTitle;
    var deadline = req.body.pollDeadline;
    var locations = req.body.locations;
    var date = req.body.dateTime;
    var transportation = req.body.transportation;
    var funding = req.body.funding;
    var description = req.body.description;
    var emails = req.body.emails;
    console.log(req);
    sql.insert("Insert into meow "+req.name);
    res.send("Post request received</br>\n");
}

var exports = {};
exports.post = post;
module.exports = exports;
