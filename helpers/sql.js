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

  console.log(colors.green("Successfully got a mysql connection with database pollease"));

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
      if(callback != null && typeof callback ==="function"){
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
function selectOwner(id,callback,fail){
    var connection = getConnection();
    connection.query("select * from users where id=?",[id],function(err,rows,field){
      if(err){
        console.log(colors.red("Error selecting from users where uid = "+id));
        fail();
      }
      if(rows.length > 0 ){
        var email = rows[0].email;
        callback(email);
      }
      else{
        console.log(colors.red("No owners with id "+id));
        fail();
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
    connection.query("select event_id from events where uid=?",[eventId], function(err,rows,field){
      if(err || rows == null || rows.length ==0){
          console.log(colors.red("No event where uid="+eventId));
          connection.end();
          return;
      }
      connection.end();
      connection = getConnection();
      var e_id = rows[0].event_id;
      connection.query("update options set tally=tally+1 where event_id=? AND description=?",[e_id,description],function(err){
            if(err){
              console.log(colors.red("Query "+eventId + " " + description));
            }
            else{
              console.log(colors.green("Voted for "+description));
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
        else{
          console.log(colors.blue("No user in database "+uid));
        }
        connection.end();
      }
  });
}

function selectEvent(e_id,callback,fail){

    var connection = getConnection();
    connection.query("SELECT * from events where uid=?",[e_id],function(err,rows,fields){
      if(err){
        console.log(colors.red("Error selecting from events "+e_id));
        fail();
      }
      else if(rows.length > 0 ){
        console.log(colors.green("Responding with poll: "+JSON.stringify(rows[0])));
            callback(rows[0]);
      }
      else{
        console.log(colors.red("No event for "+e_id));
        fail();
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
    connection.query("insert into options values(default,?,?,?,0)", [type,rows[0].event_id,description],function(err){
        if(err){
          console.log(colors.red("Error inserting into options " + [type,rows[0].event_id,description]));
        }
        else{
          console.log(colors.blue("Created option "+[type,rows[0].event_id,description]));
        }
        connection.end();
    });
  });

}

function get_options(event_id,type,callback,fail){
    var connection = getConnection();
    connection.query("select * from options where type=? AND event_id=?",[type,event_id],function(err,rows,fields){
        if(err){
          console.log(colors.red("Error in get_options executing "+[type,event_id]));
          fail();
        }
        else if(rows.length > 0){
          callback(rows);
        }else{
          console.log(colors.red("No options for "+[event_id,type]));
        }
        connection.end();
    });
}

function getUser(user_id,callback,fail){
  var connection = getConnection();
  connection.query("select * from users where id=?",[user_id],function(err,rows,fields){
    if(err){
      console.log(colors.red("Error getting user "+user_id));
      fail("Nothing in getUser");
    }
    else if(rows.length >= 1){
      console.log(colors.green("Sending back owner "+JSON.stringify(rows[0])+"\n"));
      callback(rows[0]);
    }
    else{
      fail("No rows for users matching where id="+user_id);
    }
    connection.end();
  });

}

function getOwner(poll_id,callback,fail){
  var connection = getConnection();
  connection.query("select * from events where uid=?",[poll_id],function(err,rows,fields){

      if(err){
        fail("Error selecting from events where uid="+[poll_id]);
      }
      else if(rows.length >=1){
        console.log(colors.green("Sending owner_id from getOwner to callback: "+rows[0].owner_id));
        callback(rows[0].owner_id);
      }else{
        fail("No rows matching where uid="+poll_id);
      }
      connection.end();
  });
}

module.exports = {};
module.exports.getUser = getUser;

module.exports.selectOwner = selectOwner;
module.exports.getOwner = getOwner;
module.exports.get_options = get_options;
module.exports.selectEvent = selectEvent;
module.exports.send_all_events = getAllPolls;
module.exports.createUser = createUser;
module.exports.createPoll = createPoll;
module.exports.createOption = createOption;
module.exports.vote = castVote;
module.exports.deleteUser = deleteUser;
