var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var colors = require("colors");
var bodyParser = require("body-parser");

// Our modules
var sendmail = require("./routes/sendmail.js");
var polls = require("./routes/polls.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/polls",polls.get);
//app.post("/polls",polls.post);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
