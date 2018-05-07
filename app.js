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
      db = require('./db');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({secret: 'this-is-a-secret', cookie: { maxAge: 60000}}));

app.use('/game', game);
app.use('/user', user);
app.use('/gamerecords', gamerecords);

app.get('/', userController.find_user_by_id);

app.get('/session/new', function(req, res) {
  res.render('login', { title: 'Log In' });
});

app.post('/session/new', userController.find_user);

module.exports = app;
