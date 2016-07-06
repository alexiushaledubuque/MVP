var express = require('express');

var app = express();

app.listen(9000, function(err){
  if (err){
    console.log('server sucks');
  }
})
//var app = require('server.js');

//app.listen(9000);
// configure our server with all the middleware and and routing
// require('middleware.js')(app, express);
