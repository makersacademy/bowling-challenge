const express = require('express')
const app = express()
var http = require('http');

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;

if (!module.parent) {
  http.createServer(app).listen(process.env.PORT, function() {
    console.log("Server listening on port 3000");
  });
}
