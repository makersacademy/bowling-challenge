const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const gameController = require('./controllers/gameController');

mongoose.connect('mongodb://localhost:27017/bowling_test');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/game/play', function(req,res) {
  res.render('play', { bonus: req.query.bonus, currentFrame: req.query.currentFrame, currentRoll: req.query.currentRoll});
});

app.post('/game/play', gameController.play);

app.get('/user/new', function(req, res) {
  res.render('signup');
});

app.post('/user/new', userController.create_user);

app.listen(port, _ => console.log(`Listening at port ${port}`));
