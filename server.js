// server.js
// where your node app starts

// init project
//Basic required import for NodeJS
var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');

//Create an instance of express for our app and instantiate bodyParser and Cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

//Get CALL to return JSON thats format natural and unix date
app.get('/dateValues/:dateVal',function(req,res,next){
  
  var dateVal = req.params.dateVal;
  
  res.json({unix: dateVal});
});

app.listen(3000, function(){
  console.log("It's working");
});