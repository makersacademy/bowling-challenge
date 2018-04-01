var express = require('express')
var app = express()
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var Game = require('./src/game');

app.use(express.static('/public'));
app.use(express.static(path.join(__dirname, 'public')));

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var game = new Game()

app.get('/', function(req, res) {
  res.render('scorecard', {
    row: game.row(),
    frame: game.frame(),
    score: game.score()
  });
});

app.post('/',  function(req, res) {
  game.receiveThrow(req.body.ball_throw);
  console.log(game._rolls)
  res.redirect('/');
});

module.exports = app;

if (!module.parent) {
  http.createServer(app).listen(3000, function() {
    console.log("Server listening on port 3000");
  });
}
