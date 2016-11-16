var mysql = require("mysql");
var colors = require("colors");
var config = require("../config.js");
var crypto = require("crypto");

function getConnection(){
  var connection = mysql.createConnection({
      host:"localhost",
      user:config.username,
      password:config.password,
      database:"pollease"
  });

  //Table schemes
  var err = false;
  connection.connect();
  return connection;
}
/*
create TABLE events(name varchar(255), owner_id int, description varchar(255), attendee_id int, event_id int primary key auto_increment unique,FOREIGN KEY(attendee_id) references users(id), FOREIGN KEY(owner_id) references users(id));
*/

var exports = {};

function createUser(email,uid,callback){
    //select * from users where email=email;
    //if that doesn't exist then do this?
    var connection = getConnection();
    connection.query("insert into users values(default,?,?)",[email,uid],function(err,rows,fields){
      if(err){
        console.log(colors.red("Error inserting user "+email +" with uid "+uid));
        connection.end();
        return;
      }
      console.log(colors.blue("Added user "+email + " to table users"));
      connection.end();
      if(callback){
        callback();
      }
    });
}

function createOption(event_id,description,type){
    var connection = getConnection();
    connection.query("insert into options values(default,?,?,?,0)",[type,event_id,description],function(err){
      if(err){
        console.log(colors.red("Error inserting into table options "+event_id+" "+description+" "+type));
      }
      connection.end();
    });
}

function createPoll(name,owner_id,deadline,description,callback){

  var connection = getConnection();

  var event_id = crypto.randomBytes(32).toString("hex");

  connection.query("select id from users where uid=?",[owner_id],function(err,rows,fields){
    if(err || rows==null || rows.length == 0){
        console.log(colors.red("Cannot get users with uid "+owner_id));
        connection.end();
        return;
    }
    connection.end();
    connection = getConnection();
    var rows_initial = rows;
    console.log(users.id);
    connection.query("insert into events values(?,?,?,?,?)",[name,rows[0].id,description,deadline,event_id],function(err,rows,fields){
        if(err){
            console.log(colors.red("Error executing query insertion for create poll: "),[name,rows_initial[0].id,description,deadline,event_id]);
        }
        connection.end();
    });
    callback(event_id);

  });
  /*
  `name` varchar(255) DEFAULT NULL,
  `owner_id` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  'deadline' varchar(255) DEFAULT NULL,
  `event_id` varchar(255) not NULL AUTO_INCREMENT,
  */
  return event_id;
}

function getAllPolls(uid,callback){

    var connection = getConnection();

    connection.query("select * from polls where owner_id=?",[uid],function(err,rows,fields){
    if(err){
        console.log(colors.red("Query failed under getAllPolls with uid "+uid));
        return;
    }
    connection.end();
    callback(rows,fields);
    });
}

function castVote(eventId,description){

    var connection = getConnection();

    connection.query("update options set tally=tally+1 where event_id=? AND description=?",[eventId,description],function(err){
          if(err){
            console.log(colors.red("Query "+eventId + " " + description));
          }
          connection.end();
    });
}

function deleteUser(uid){
  var connection = getConnection();
  connection.query("DELETE FROM users where uid=?",[uid],function(err,rows,fields){
      if(err){
        console.log(colors.red("Error with query delete user "+uid));
        connection.end();
      }
      else{
        if(rows.length > 0){
          console.log(colors.green("Deleted user "+uid));
        }
        connection.end();
      }
  });
}

function createOption(poll_id,description,type){
  /*  `id` int(11) AUTO_INCREMENT,
    `type` int(11) DEFAULT NULL,
    `event_id` int(11) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    'tally' int DEFAULT 0,*/
    var connection = getConnection();
  connection.query("select * from events where event_id=?",[poll_id],function(err,rows,fields){
    if(err || rows.length == 0){
      console.log(colors.red("No events with id "+poll_id));
      connection.end();
      return;
    }
    connection.query("insert into options values(default,?,?,?,0)", [type,rows[0].id,description],function(err){
        if(err){
          console.log(colors.red("Error inserting into options" + [type,rows[0].id,description]));
        }
        connection.end();
    });
  });

}

module.exports = {};
module.exports.send_all_events = getAllPolls;
module.exports.createUser = createUser;
module.exports.createPoll = createPoll;
module.exports.createOption = createOption;
module.exports.vote = castVote;
module.exports.deleteUser = deleteUser;
