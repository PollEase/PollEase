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

function createUser(email,uid,name,callback){
    //select * from users where email=email;
    //if that doesn't exist then do this?
    var connection = getConnection();
    connection.query("insert into users values(default,?,?,?)",[name,email,uid],function(err,rows,fields){
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



function createPoll(name,owner_id,deadline,description,cost,callback){

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
    connection.query("insert into events values(?,?,?,?,default,?,?)",[name,rows[0].id,description,deadline,event_id,cost],function(err,rows,fields){
        if(err){
            console.log(colors.red("Error executing query insertion for create poll: "),[name,rows_initial[0].id,description,deadline,event_id]);
        }
        connection.end();
        console.log(colors.blue("Successfully inserted event: "+name));
        callback(event_id);

    });

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
function selectOwner(id,callback){
    var connection = getConnection();
    connection.query("select 1 from users where uid=?",[id],function(err,rows,field){
      if(err){
        console.log(colors.red("Error selecting from users where uid = "+id));
      }
      if(rows.length > 0 ){
        var email = rows[0].email;
        callback(email);
      }
    });
}
function getAllPolls(email,callback,finalize_emails){

    var connection = getConnection();
    connection.query("select * from users where email=?",[email],function(err,rows,fields){

      connection.end();
      (function for_each_row(i){
          if(i >= rows.length){
            finalize_emails();
            return;
          }

          connection = getConnection();
          connection.query("select * from polls where owner_id=?",[rows[i].uid],function(err,rows2,fields){
          if(err){
              console.log(colors.red("Query failed under getAllPolls with uid "+uid));
              return;
          }
          connection.end();
          callback(rows2,fields);
          for_each_row(i+1);
          });

      })(0);

    });

}

function castVote(eventId,description){

    var connection = getConnection();
    connection.query("select event_id from events where uid=?",[eventId], function(err,row,field){
      if(err || rows == null || rows.length ==0){
          console.log(colors.red("No event where uid="+eventId));
          connection.end();
          return;
      }
      var e_id = rows[0].event_id;
      connection.query("update options set tally=tally+1 where event_id=? AND description=?",[e_id,description],function(err){
            if(err){
              console.log(colors.red("Query "+eventId + " " + description));
            }
            connection.end();
      });
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

function selectEvent(e_id,callback){
    var connection = getConnection();
    connection.query("SELECT 1 from events where event_id=?",[e_id],function(err,rows,fields){
      if(err){
        console.log(colors.red("Error selecting from events "+e_id));
      }
      else{
        if(rows.length > 0 ){
            callback(rows[0]);
        }
      }
      connection.end();
    });
}

function createOption(poll_id,description,type){
  /*  `id` int(11) AUTO_INCREMENT,
    `type` int(11) DEFAULT NULL,
    `event_id` int(11) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    'tally' int DEFAULT 0,*/
  var connection = getConnection();
  connection.query("select * from events where uid=?",[poll_id],function(err,rows,fields){
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

function get_options(event_id,type,callback){
    var connection = getConnection();
    connection.query("select * from options where type=? AND event_id=?",[event_id,type],function(err,rows,fields){
        if(err){
          console.log(colors.red("Error in get_options executing "+[event_id,type]));
          return;
        }
        if(rows.length > 0){
          callback(rows);
        }
    });
}


module.exports = {};
module.exports.selectOwner = selectOwner;
module.exports.get_options = get_options;
module.exports.selectEvent = selectEvent;
module.exports.send_all_events = getAllPolls;
module.exports.createUser = createUser;
module.exports.createPoll = createPoll;
module.exports.createOption = createOption;
module.exports.vote = castVote;
module.exports.deleteUser = deleteUser;
