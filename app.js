const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const gameController = require('./controllers/gameController');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/game/play', function(req,res) {
  res.render('play');
});

app.post('/game/play', gameController.play);

app.listen(port, _ => console.log(`Listening at port ${port}`));
