var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var colors = require("colors");
var bodyParser = require("body-parser");

var sql = require("./helpers/sql.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Our modules
var email = require("./routes/email.js");
app.post("/email",email.post);

var createPoll = require("./routes/createPoll.js");
app.post("/createPoll",createPoll.post);

var submitPreferences = require("./routes/submitPreferences.js");
app.post("/submitPreferences",submitPreferences.post);

var results = require("./routes/results.js");
app.get("/results",results.get)

app.use(express.static(path.join(__dirname, 'public')));

app.set('case sensitive routing', false);

console.log(colors.green("Application listening on port 8000"));

module.exports = app;
