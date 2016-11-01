var mysql = require("mysql");
var colors = require("colors");

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"pollease"
});


connection.connect();

connection.query('select 1+1 as solution', function(err, rows, fields){
    if(err){
        console.log(colors.red.bold("SQL Test Statement Failed."));
    }
    else{
        console.log(colors.green("Connected to database 'pollease'"));
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
