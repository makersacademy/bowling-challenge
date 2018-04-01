// === dependencies === //
var express = require('express');
var app = express();
var ejs = require('ejs');
var Frame = require('./public/frame');
var Game = require('./public/game');
var bodyParser = require('body-parser');
var game;

// === setup === //
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

// === routes === //
app.get('/', function(req, res){
  res.redirect('/bowling');
});

app.get('/bowling', function(req,res){
  res.render('bowling', {game: game,
    Game: Game,
  Frame: Frame});
});

app.post('/bowling/startNew', function(req,res){
  var game = new Game(Frame);
    console.log(game);
  res.redirect('/bowling');
});

app.listen(4567, function(){
  console.log('Bowling Challenge app listening on port 4567!');
});
