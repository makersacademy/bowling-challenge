var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
  res.send("Hi");
});

app.listen(port, '127.0.0.1');
console.log('You are live on port 3000');