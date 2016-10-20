var mysql = require("mysql");
var colors = require("colors");

var connection = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"pwd"
});

connection.connect(function(err){
    if(err){
      console.log(colors.blue("This is not yet implemented, ignore this message."));
      console.log(colors.red.bold("Couldn't connect to mysql.\n"));
    }
});

function execute(query, callback){
    connection.query(query,callback);
}

module.exports = execute;
