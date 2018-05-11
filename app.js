require('dotenv').load();
const express = require('express');
const app = express();
const bodyParser = require('body-parser'),
      game = require('./routes/game'),
      gamerecords = require('./routes/gamerecord'),
      db = require('./db'),
      auth = require('./routes/auth');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/game', game);
app.use('/gamerecords', gamerecords);
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/showRecords', (req, res) => {
  res.render('gamerecords');
});

module.exports = app;
