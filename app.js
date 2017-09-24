// var express = require('express');
// var expressValidator = require('express-validator');
// var bodyParser = require('body-parser');
// var path = require('path');
// var session = require('express-session');
//
// var app = express();
// app.use(expressValidator());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(function(req, res, next) {
//   res.locals.errors = null;
//   next()
// });
//
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
//
// // app.use('/', index);
//
// var server = app.listen(1337, function() {
//   var host = server.address().address;
//   var port = server.address().port;
//
//   console.log('app running at http://%s:%s', host, port);
// });
//
// app.get('/', function(req,res){
//   res.render('index', {
//   });
// });
//
// app.post('/', function(req,res){
//   var pins = req.body.pins;
//   res.redirect('/');
// });
