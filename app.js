require('dotenv').load();
const express = require('express');
const app = express();
const session = require('express-session'),
      bodyParser = require('body-parser'),
      userController = require('./controllers/userController'),
      gameRecordController = require('./controllers/gameRecordController'),
      game = require('./routes/game'),
      port = 8080,
      user = require('./routes/user'),
      gamerecords = require('./routes/gamerecord'),
      db = require('./db'),
      auth = require('./routes/auth');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({secret: process.env.SECRET, cookie: { maxAge: 60000}}));

app.use('/game', game);
app.use('/user', user);
app.use('/gamerecords', gamerecords);
app.use('/auth', auth);

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
