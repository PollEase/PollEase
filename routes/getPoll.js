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
      var funding = row.funding;
      sql.selectOwner(owner_id,function(creator){
          var json_object = {};
          json_object.creatorEmail = creator.email;
          json_object.name = creator.name;
          json_object.eventTitle = name;
          json_object.pollDeadline = deadline;
          json_object.funding = funding;
          json_object.description = description;

          function finalize(){
            res.send(JSON.stringify(json_object));
            return;
          }

          sql.get_options(event_id,1,function(rows){
            var all_times = [];

            for(var i = 0; i < rows.length; i++){
                  all_times.append(rows[i].description);
            }

            json_object.times = all_times;
            sql.get_options(event_id,0,function(rows){
              var locations = [];

              for(var i = 0; i < rows.length; i++){
                locations.append(rows[i].description);
              }

              json_object.times = locations;
              finalize();
              });
          });


      });

  });



}

var exports = {};
exports.get = get;
module.exports = exports;
