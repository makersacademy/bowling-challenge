const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session')
const { redirect } = require('express/lib/response');
const sum_arr = require('../lib/helpers');

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
  const cardData = req.session.scorecard
  const scorecard = new ScoreCard(cardData.frames)
  res.render('game', { session: req.session, scorecard: scorecard })
})

app.post('/add_frame', (req, res) => {
  score = req.body.roll
  if (req.session.roll_num == 1 ) {
    const frame = new Frame(req.session.frame_num)
    const cardData = req.session.scorecard
    const scorecard = new ScoreCard(cardData.frames)
    frame.add_roll(parseInt(score))
    console.log(req.session.frame_num)
    if (score == '10' && req.session.frame_num != 10 ) {
      scorecard.add_frame(frame)
      req.session.frame_num++
      req.session.roll_num = 1
    } else if (score == '10' && req.session.frame_num == 10 ) {
      req.session.roll_num++
    } else {
      req.session.roll_num++
    }
    req.session.cur_frame = frame
    req.session.scorecard = scorecard
    res.redirect('/game')
  } else if (req.session.roll_num == 2 && req.session.frame_num != 10) {
      const frameData = req.session.cur_frame
      const frame = new Frame(frameData.frame_num, frameData.score)
      const cardData = req.session.scorecard
      const scorecard = new ScoreCard(cardData.frames)
      frame.add_roll(parseInt(score))
      scorecard.add_frame(frame)
      req.session.cur_frame = null
      req.session.scorecard = scorecard
      req.session.roll_num = 1
      req.session.frame_num++
      res.redirect('/game')
  } else if (req.session.roll_num == 2 && req.session.frame_num == 10) {
      console.log(req.session.scorecard)
      req.session.cur_frame.score.push(parseInt(score));
        if ( sum_arr(req.session.cur_frame.score) < 10 && req.session.roll_num == 2 ) {
          const frameData = req.session.cur_frame
          const frame = new Frame(frameData.frame_num, frameData.score)
          const cardData = req.session.scorecard
          const scorecard = new ScoreCard(cardData.frames)
          scorecard.add_frame(req.session.cur_frame)
          req.session.scorecard = scorecard
          req.session.cur_frame = null
          req.session.game_in_progress = false
          res.redirect('/game')
        } else {
          req.session.roll_num = 3
          res.redirect('/game')
        }
  } else if (req.session.roll_num == 3 ) {
      const frameData = req.session.cur_frame
      const frame = new Frame(frameData.frame_num, frameData.score)
      const cardData = req.session.scorecard
      const scorecard = new ScoreCard(cardData.frames)
      frame.add_roll(parseInt(score))
      scorecard.add_frame(req.session.cur_frame)
      req.session.scorecard = scorecard
      req.session.game_in_progress = false
      console.log(req.session.scorecard)
      res.redirect('/game')
  }
})

app.listen(3000)