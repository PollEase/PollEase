var mysql = require("sqlite3").verbose();
var colors = require("colors");

const db = "pollease";

function execute(query, callback){

    var connection = mysql.createConnection({
        host:"localhost",
        user:"admin",
        password:"pwd",
        database:db
    });
    connection.connect(function(err){
        if(err){
          console.log(colors.blue("This is not yet implemented, ignore this message."));
          console.log(colors.red.bold("Couldn't connect to mysql.\n"));
        }
    });
    connection.query(query,callback);
    connection.end();

}



module.exports = execute;
