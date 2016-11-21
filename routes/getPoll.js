var sql = require("../helpers/sql.js");

function get(req,res){
  var pollId = req.query.pollId;
  if(!(pollId)){
    res.send("No Poll Id Sent.");
    return;
  }

  sql.selectEvent(function(row){
      var owner_id = row.owner_id;
      var name = row.name;
      var description = row.description;
      var deadline = row.deadline;
      var event_id = row.event_id;
      var uid = row.uid;

      sql.selectOwner(function(row2){
        
      });

  });

  res.send(```{
      "creatorEmail": "sample@gmail.com",
      "name":"Luke Wood"
      "eventTitle": "Class",
      "pollDeadline": "2016-05-23T18:25:43.511Z",
      "locations": ["Fondren","Caruth"],
      "times": ["2016-05-23T18:25:43.511Z"],
      "funding": 10.23,
      "description": "Get excited for next class!",
  }```);

}

var exports = {};
exports.get = get;
module.exports = exports;
