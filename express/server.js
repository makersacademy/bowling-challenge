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

app.set('trust proxy', 1)
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

app.post("/end_game", (req, res) => {
  req.session.destroy();
  res.redirect('/')
})

app.get('/game', (req, res) => {
  const cardData = req.session.scorecard
  const scorecard = new ScoreCard(cardData.frames)
  res.render('game', { session: req.session, scorecard: scorecard })
})

app.post('/add_frame', (req, res) => {
  score = req.body.roll
  if (req.session.roll_num == 1 ) { // if first roll init frame with frame_num and reinit scorecard with frames taken from session
    const frame = new Frame(req.session.frame_num)
    const cardData = req.session.scorecard
    const scorecard = new ScoreCard(cardData.frames)
    frame.add_roll(parseInt(score))
    if (score == '10' && req.session.frame_num != 10 ) { // if a strike and not frame 10, score strike and move on to next frame
      frame.gen_string_rep()
      scorecard.add_frame(frame)
      req.session.frame_num++
      req.session.roll_num = 1
    } else { // if is frame 10, give player another throw
      req.session.roll_num++
    }
    req.session.cur_frame = frame
    req.session.scorecard = scorecard
    res.redirect('/game')
  } else if (req.session.roll_num == 2 && req.session.frame_num != 10) { // if second roll and not frame 10, push frame and move onto next
      const frameData = req.session.cur_frame
      const frame = new Frame(frameData.frame_num, frameData.score)
      const cardData = req.session.scorecard
      const scorecard = new ScoreCard(cardData.frames)
      frame.add_roll(parseInt(score))
      frame.gen_string_rep()
      scorecard.add_frame(frame)
      req.session.cur_frame = null
      req.session.scorecard = scorecard
      req.session.roll_num = 1
      req.session.frame_num++
      res.redirect('/game')
  } else if (req.session.roll_num == 2 && req.session.frame_num == 10) { // if frame 10 and roll 2
      req.session.cur_frame.score.push(parseInt(score))
      if ( sum_arr(req.session.cur_frame.score) < 10 && req.session.roll_num == 2 ) { // if not got a spare, push frame and close game
        const frameData = req.session.cur_frame
        const frame = new Frame(frameData.frame_num, frameData.score)
        const cardData = req.session.scorecard
        const scorecard = new ScoreCard(cardData.frames)
        frame.gen_string_rep()
        scorecard.add_frame(frame)
        req.session.scorecard = scorecard
        req.session.cur_frame = null
        req.session.game_in_progress = false
        res.redirect('/game')
      } else { // else give another go to player
        req.session.roll_num = 3
        res.redirect('/game')
      }
  } else if (req.session.roll_num == 3 ) { // if reached roll 3, assume is last frame, push frame and end game
      const frameData = req.session.cur_frame
      const frame = new Frame(frameData.frame_num, frameData.score)
      const cardData = req.session.scorecard
      const scorecard = new ScoreCard(cardData.frames)
      frame.add_roll(parseInt(score))
      frame.gen_string_rep()
      scorecard.add_frame(frame)
      req.session.scorecard = scorecard
      req.session.game_in_progress = false
      res.redirect('/game')
  }
})

app.listen(3000)