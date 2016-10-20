var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var colors = require("colors");

var mysql = require("mysql");

var sendmail = require("./routes/sendmail.js");

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


var app = express();

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
