var sql = require("../helpers/sql.js");
var colors = require("colors");

function fail(message){
  console.log(colors.red(message));
}

function send_response(object,res){
  res.send(JSON.stringify(object));
}

function get(req,res){
  var pollId = req.query.pollId;
  if(pollId == null){
    fail("No Poll Id was sent.");
    res.send("No Poll Id Sent.");
    return;
  }

  var response_object= {};

  sql.getOwner(pollId,function(owner_id){
      
  },fail);


  `{
   "creatorEmail": "example@smu.edu",
   "creatorFirstName": "Will",
   "creatorLastName": "Spurgin",
   "eventTitle": "Group Project Get Together",
   "locations": [
        {
            "name": "Fondren",
            "voters": [{firstname,lastname}]
        }
    ],
   "times": [
        {
            "dateTime": "2016-04-23T18:25:43.511Z",
            "voters": [{firstname,lastname}]
        }
   ],
    "description": "Get excited for next class!",
    "emails": ["anyEmail@gmail.com", "ajf@gmail.com"],
    "coverCharge": 50
  }`

}

var exports = {};
exports.get = get;

module.exports = exports;
