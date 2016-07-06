var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../client'));
//app.use(express.static(__dirname + '/../styles'));
var port = process.env.PORT || 9000;
app.listen(9000, function(err){
  if (err){
    console.log('server sucks');
  }
  console.log('server is listening.....')
})
//var app = require('server.js');

//app.listen(9000);
// configure our server with all the middleware and and routing
// require('middleware.js')(app, express);
