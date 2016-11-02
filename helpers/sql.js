var mysql = require("mysql");
var colors = require("colors");
var config = require("../config.js");

var connection = mysql.createConnection({
    host:"localhost",
    user:config.username,
    password:config.password,
    database:"pollease"
});

//Table schemes
var err = false;
connection.connect();
/*
create TABLE events(name varchar(255), owner_id int, description varchar(255), attendee_id int, event_id int primary key auto_increment unique,FOREIGN KEY(attendee_id) references users(id), FOREIGN KEY(owner_id) references users(id));
*/
connection.query('select 1+1 as solution', function(err, rows, fields){
  if(err){
    console.log(colors.red("Error connecting to 'pollease'"));
    err = true;
  }
  else{
    console.log(colors.green("Connected to database pollease"));
  }
});


function exitHandler(){
    if(connection){
        console.log(colors.blue("\nConnection with 'pollease' ended."));
        connection.end();
        connection = false;
    }
}
process.on("exit",exitHandler);
process.on("SIGINT",exitHandler);
process.on("uncaughtException",exitHandler);

var exports = {};

function createUser(email,uid){
    //select * from users where email=email;
    //if that doesn't exist then do this?
    connection.query("insert into users values(default,?,?)",[email,uid],function(err,rows,fields){
      if(err){
        console.log(colors.red("Error inserting user "+email +" with uid "+uid));
      }
        console.log(colors.blue("Added user "+email + " to table users"));
    });
}

function getAllPolls(uid,callback){
    connection.query("select * from polls where uid=?",[uid],function(err,rows,fields){
    if(err){
        console.log(colors.red("Query failed under getAllPolls with uid "+uid));
        return;
    }
    callback(rows,fields);
    });
}

module.exports = {};
module.exports.createUser = createUser;
