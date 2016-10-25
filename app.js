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

var editPoll = require("./routes/editPoll.js");
app.put("/editPoll",editPoll.put);

var submitPreferences = require("./routes/submitPreferences.js");
app.post("/submitPreferences",submitPreferences.post);

var editPreferences = require("./routes/editPreferences.js");
app.put("/editPreferences",editPreferences.put);

var results = require("./routes/results.js");
app.get("/results",results.get)

sql();

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
