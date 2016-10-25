var sqlite3 = require("sqlite3").verbose();
var colors = require("colors");

const dbname = ":memory:";

// query -> currently plain text
//callback called on every row

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
