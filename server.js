var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(process.argv[2], function() {
  console.log("Server listening on: http://localhost:%s", process.argv[2])
})
