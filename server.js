var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.end('Hello World');
});

app.listen(process.argv[2], function() {
  console.log("Server listening on: http://localhost:%s", process.argv[2])
})
