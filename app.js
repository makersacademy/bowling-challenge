// === dependencies === //
var express = require('express');
var app = express();
var ejs = require('ejs');
var Frame = require('./src/frame');
var Game = require('./src/game');
var bodyParser = require('body-parser');
var game = new Game (Frame);

// === setup === //
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

// === routes === //
app.get('/', function(req, res){
  res.redirect('/bowling');
});

app.get('/bowling', function(req,res){
<<<<<<< HEAD
  res.render('bowling');
=======
  res.render('bowling', {game: game});
});

app.post('/bowling/startNew', function(req,res){
  var game = new Game(Frame);
    console.log(game);
  res.redirect('/bowling');
>>>>>>> master
});

app.listen(4567, function(){
  console.log('Bowling Challenge app listening on port 4567!');
});
