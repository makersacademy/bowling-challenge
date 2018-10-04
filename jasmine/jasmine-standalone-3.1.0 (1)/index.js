var express = require('express')
var app = express()
var game = require('Game.js')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Welcome to Chiaki\'s Bowltacular Bowlorama')
})




app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
