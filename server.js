var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/Stylesheets'));
app.use(express.static(__dirname + '/build/Assets'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.listen(port, () => {
  console.log('listening on port 3000 or Heroku\'s port');
});