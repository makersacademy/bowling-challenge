// === dependencies === //
var express = require('express');
var app = express();
var ejs = require('ejs');

// === setup === //
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

// === routes === //
app.get('/', function(req, res){
  res.redirect('/bowling');
});

app.get('/bowling', function(req,res){
  res.render('bowling');
});

app.listen(4567, function(){
  console.log('Bowling Challenge app listening on port 4567!');
});
