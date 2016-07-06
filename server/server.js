var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../client'));
//app.use(express.static(__dirname + '/../styles'));
var port = process.env.PORT || 9000;

app.listen(port, function(err){
  if (err){
    console.log('server sucks');
  }
  console.log('server is listening.....')
});