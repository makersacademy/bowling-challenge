var http = require('http');
var express = require('express');

var server = http.createServer(function(req, res) {
  console.log("Request was made: " + req.url);
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hey, heres some plain text');
});

server.listen(3000, '127.0.0.1');
console.log('You are live on port 3000');