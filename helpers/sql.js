var sqlite3 = require("sqlite3").verbose();
var colors = require("colors");

const dbname = ":memory:";



// query -> currently plain text
function select(query, callback){

  var db = new sqlite3.Database(dbname);

  db.serialize(function() {
    db.each(query, cb);
  });

  db.close();

}


var exports = {};
exports.select = select;
exports.insert = insert;

module.exports = exports;
