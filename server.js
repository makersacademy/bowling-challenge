const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const bowling = require('./bowling.js')
const bodyParser = require('body-parser');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
const port = 3000;

game = new bowling

app.get('/bonus', (req, res) => {
  const errors = req.flash('error');
  points = game.getScore()
  turn = game.frameNum.length+1
  spare = false
  if (game.strike + game.spare === 2) {
    spare = false
  } else {
    spare = true
  }

  const data = {
    score: points,
    frame: turn,
    errors: errors,
    spare: spare
  };

  if(turn === 11) {
  res.render('bonus', data);
  } else {
    res.redirect('/');
  }
});
app.get('/end', (req, res) => {

   data = {
    end: game.addScores(0,0)
   }
   game.reset()
  res.render('end', data);
});


app.get('/', (req, res) => {
  const errors = req.flash('error');
  points = game.getScore()
  turn = game.frameNum.length+1

  const data = {
    score: points,
    frame: turn,
    errors: errors
  };
if(game.frameNum.length === 10 && game.frameNum[frameNum.length-1][0] === 10){
    res.redirect('bonus');
   } else if(game.frameNum.length === 10 ){
    res.redirect('end');
  } else if (game.frameNum.length === 10 && (game.frameNum[game.frameNum.length-1][0]+ game.frameNum[game.frameNum.length-1][1] === 10)){
    res.redirect('/bonus');
  } else {
  res.render('index', data);
  }
});
app.post('/', (req, res) => {
  let roll1 = parseInt(req.body.roll1) || 0
  let roll2 = parseInt(req.body.roll2) || 0


  if (isNaN(roll1) || isNaN(roll2)) {
    req.flash('error', 'Roll values must be numeric');
  } else if(  roll1+roll2 > 10 ) {
    req.flash('error', 'total of the rolls cant be more than 10');
  } else if( roll1 < 0 || roll2 < 0) {
    req.flash('error', 'roll values cant be negative');
  }
   else {
    game.addScores(roll1, roll2);
  }
  if (game.frameNum.length === 10 && game.frameNum[game.frameNum.length-1][0] === 10){
      res.redirect('/bonus');
  }else if (game.frameNum.length <10){
  res.redirect('/');
  }
  else{
    res.redirect('/end');
  }
});






console.log(`Server listening on localhost:${port}`);
app.listen(port);