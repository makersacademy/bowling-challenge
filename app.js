// === dependencies === //
var express = require('express');
var app = express();
var ejs = require('ejs');

// === setup === //
app.set('view engine', 'ejs')

// === routes === //
app.get('/', function(request,response){
  response.render('app');
});

app.listen(4567, function(){
  console.log('Bowling Challenge app listening on port 4567!');
});
