const express = require('express');
const app = express();
const session = require('express-session'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      userController = require('./controllers/userController'),
      gameController = require('./controllers/gameController'),
      port = 8080;

mongoose.connect('mongodb://localhost:27017/bowling_test');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({secret: 'this-is-a-secret', cookie: { maxAge: 60000}}));

app.get('/', function(req, res) {
  if(req.session.userId) { userController.find_user_by_id(req.session.userId); }; 
  res.render('index', { title: 'Home' });
});

app.get('/game/play', function(req,res) {
  res.render('play', { ...req.query, title: 'Play' });
});

app.post('/game/play', gameController.play);

app.get('/user/new', function(req, res) {
  res.render('signup', { title: 'Sign Up' });
});

app.post('/user/new', userController.create_user);

app.get('/session/new', function(req, res) {
  res.render('login', { title: 'Log In' });
});

app.post('/session/new', userController.find_user);

app.listen(port, _ => console.log(`Listening at port ${port}`));
