var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var colors = require("colors");
var bodyParser = require("body-parser");

var sendmail = require("./routes/sendmail.js");
var polls = require("./routes/polls.js");
var sql = require("./db/sql.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/polls",polls.post);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
