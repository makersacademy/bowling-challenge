const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


const index = require('./index.js')

app.set('view engine', 'ejs');


app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}))


app.use('/', index);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
 console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;
