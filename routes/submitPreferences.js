var sql = require("../helpers/sql.js");

function post(req,res){
    var eventId = req.body.eventId, firstName = req.body.firstName, lastName = req.body.lastName, times = req.body.times, locations = req.body.locations;

    for(var i = 0; i < times.length; i++){
      sql.vote(eventId,times[i]);
    }

    for(var i = 0; i < locations.length; i++){
      sql.vote(eventId,locations[i]);
    }

    sql.deleteUser(req.body.uid);

    res.send("{'SubmissionSuccessful':1}");
}

var exports = {};
exports.post = post;
module.exports = exports;
