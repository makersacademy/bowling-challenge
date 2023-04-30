const express = require('express');
const path = require('path');
const app = express();
let session = require('express-session');
const { redirect } = require('express/lib/response');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../express/views'))
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'pie',
  cookie: { maxAge: 7000000 },
  resave: true,
  saveUninitialized: true
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
  const scorecard = new ScoreCard()
  req.session.scorecard = scorecard

  res.redirect('/game')
})

app.get('/game', (req, res) => {
  res.render('game')
})

app.listen(3000)