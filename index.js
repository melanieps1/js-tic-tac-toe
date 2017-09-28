var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/')); // Looking for index.html, so have to point to where it is

app.listen(port, function() {
  console.log('I am listening on port 3000!');
  console.log("__dirname ", __dirname);
});