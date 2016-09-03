var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../client'));

var port = process.env.PORT || 9000;

app.listen(port, function(err){
  if (err){
    console.log('server not running');
  }
  console.log('server is listening.....', port);
});
