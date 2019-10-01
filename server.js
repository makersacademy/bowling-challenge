var express = require('express');
var app = express();
var path = require('path');
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(port);
