var MongoClient = require("mongodb").MongoClient,
assert = require("assert");
var colors = require("colors");

// query -> currently plain text
//callback called on every row
var db = new sqlite3.Database(dbname);
db.serialize(function(err){
    if(err){
      console.log(colors.red("Error opening sql"));
      return;
    }
    var stmt = db.prepare("create table users");
    stmt.run();
    stmt.finalize();
});

function select(query, callback){

  var db = new sqlite3.Database(dbname);

  db.serialize(function() {
    db.each(query, cb);
  });

  db.close();

}

// query -> currently a string, we'll change this.

function insert(query,callback){
  var db = new sqlite3.Database(dbname);

  db.serialize(function() {
    var stmt = db.prepare(query);
    stmt.run();
    stmt.finalize();
  });

  db.close();

}


var exports = {};
exports.select = select;
exports.insert = insert;

module.exports = exports;
