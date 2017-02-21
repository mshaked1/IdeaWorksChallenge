var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/Stylesheets'));
app.use(express.static(__dirname + '/build/Assets'));
app.listen(port, () => {
  console.log('listening on port 3000 or Heroku\'s port');
});