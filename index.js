const express = require('express');
const bodyParser = require('body-parser')
const app = express();

var db

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', function (req, res) {
  res.render('index.ejs');
})
