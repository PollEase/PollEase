var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var colors = require("colors");
var bodyParser = require("body-parser");

// Our modules
var polls = require("./routes/polls.js");
var createpolls = require("./routes/createpoll.js");
var email = require("./routes/email.js");
var edit = require("./routes/edit.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/polls",polls.get);
app.post("/email",email.post);
app.post("/createpoll",createpolls.post);
app.put("/edit",edit.put);

app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
