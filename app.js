var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var colors = require("colors");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Our modules
var email = require("./routes/email.js");
app.post("/email",email.post);

var createPoll = require("./routes/createpoll.js");
app.post("/createPoll",createPoll.post);

var editPoll = require("./routes/edit.js");
app.put("/editPoll",editPoll.put);

var submitPreferences = require("./routes/submitPreferences.js");
app.post("/submitPreferences",submitPreferences.post);

var editPreferences = require("./routes/editpreferences.js");
app.put("/editPreferences",editPreferences.put);

var results = require("./routes/results.js");
app.get("/results",reuslts.get)''

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
