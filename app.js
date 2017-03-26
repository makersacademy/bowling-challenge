var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/rolls', urlencodedParser, function(req, res) {
  console.log(req.body);
  res.render('index', {roll: req.body});
});

app.listen(port, '127.0.0.1');
console.log('You are live on port 3000');