var express = require('express');
var app = express();
var root = __dirname;
var session = require('express-session');
var flash = require('express-flash');

app.set('views', 'app/views');
app.set('view engine', 'jade');
app.use(express.static(root + '/app/public'));
app.use(session({secret: 'session secret key'}));
app.use(flash());

app.get('/', function(req, res) {
  res.render('index', {
  });
});

app.get('/score_card', function(req, res) {
  res.render('score_card', {
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Bowling app listening at http://%s:%s', host, port);
});
