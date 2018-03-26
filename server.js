//Basic required import for NodeJS

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//Create an instance of express for our app and instantiate bodyParser and Cors
var app = module.exports = express();
app.user(bodyParser.json());
app.use(cors());