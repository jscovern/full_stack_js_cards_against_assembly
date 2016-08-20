//express setup
'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('./front_end/public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
var logger = require('logger');
// app.get('/', function(req, res) {
//   res.sendfile(__dirname+"/front_end/public/index.html");
// });

//database
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/cards-against-assembly");

// start server
app.listen(port, function() {
  console.log('Server started on', port); 
});

//routes setup
var routes = require('./server_side/routes/routes');
app.use(routes);