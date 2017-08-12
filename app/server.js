var express = require('express');
var app = require('./app.js');
var http = require('http');

app.listen(6840, function() {
  console.log('Server is running on port 6840!');
});
