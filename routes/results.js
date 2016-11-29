var sql = require("../helpers/sql.js");
var colors = require("colors");

const descriptors = ["spurious","curious","comedic","ludacrious","hilarious","perfect","slippery"];
const animals = ["panther","sloth","cat","dog","spider","cheetah","koala"];
function generate_names(number){
  var response = [];
  for(var i = 0; i < number; i++){
    response.push({
      "firstName":descriptors[Math.floor(Math.random() * descriptors.length)],
      "lastName":animals[Math.floor(Math.random() * animals.length)]
    });
  }
  return response;
}

function fail(message){
  console.log(colors.red(message));
}

function get(req,res){
  var pollId = req.query.pollId;
  if(pollId == null){
    fail("No Poll Id was sent.");
    res.send("No Poll Id Sent.");
    return;
  }

  var response = {};

  sql.getOwner(pollId,function(owner_id){

    console.log(colors.green("Requesting user with id "+owner_id));
    sql.getUser(owner_id,function(owner){

        response.creatorEmail = owner.email;
        response.creatorName = owner.name;

        console.log(colors.green("Selecting poll with id "+pollId));
        sql.selectEvent(pollId,function(evt){
          response.eventTitle = evt.name;
          response.description = evt.description
          response.coverCharge = evt.funding;
          sql.get_options(evt.event_id,0,function(rows){
            response.locations = [];
            for(var i=  0; i < rows.length; i++){
              response.locations.push({
                name:rows[i].description,
                voters:generate_names(rows[i].tally)
              });
            }

            sql.get_options(evt.event_id,1,function(rows){
              response.times = [];
              for(var i=  0; i < rows.length; i++){
                response.times.push({
                  name:rows[i].description,
                  voters:generate_names(rows[i].tally)
                });
              }

              res.send(JSON.stringify(response));

            },fail);

          },fail);


        },fail);
    },fail);
  },fail);


}

var exports = {};
exports.get = get;

module.exports = exports;
