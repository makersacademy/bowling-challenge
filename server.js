var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var bowling = require('./public/src/bowling')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.render('index.ejs')
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
