const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session')
const { redirect } = require('express/lib/response');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../express/views'))
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'summer is coming',
  resave: false,
  saveUninitialized: false,
}))

const Frame = require('../lib/models').Frame
const ScoreCard = require('../lib/models').ScoreCard

app.get("/", (req, res) => {
  if (req.session.scorecard != null) {
    res.redirect('/game')
  } else {
    res.render('index')
  }
})

app.post("/start_game", (req, res) => {
  let scorecard = new ScoreCard()
  scorecard.current_score;
  req.session.scorecard = scorecard
  req.session.game_in_progress = true
  req.session.frame_num = 1
  req.session.roll_num = 1
  res.redirect('/game')
})

app.get('/game', (req, res) => {
  res.render('game', { session: req.session })
})

app.post('/add_frame', (req, res) => {
  score = req.body.roll
  if ( req.session.frame_num == 10 && sum_arr(req.session.cur_frame.score) + score == 10 ) {
    req.session.cur_frame.add_roll(score)
    req.session.roll_num = 2
    res.redirect('/game')
  } else if ( req.session.frame_num == 10 && sum_arr(req.session.cur_frame.score) + score < 10 ) {
    req.session.cur_frame.add_roll(score)
    req.session.scorecard.add_frame(req.session.cur_frame)
    req.session.cur_frame = null
    req.session.game_in_progress = false
    res.redirect('/game')
  } else if (req.session.roll_num == 1 ) {
    req.session.cur_frame = new Frame(req.session.frame_num)
    req.session.cur_frame.add_roll(score)
    req.session.roll_num++
    res.redirect('/game')
  } else if (req.session.roll_num == 2) {
    req.session.cur_frame.add_roll(score)
    req.session.scorecard.add_frame(req.session.cur_frame)
    req.session.cur_frame = null
    req.session.roll_num = 1
    req.session.frame_num++
    res.redirect('/game')
  }
})

app.listen(3000)