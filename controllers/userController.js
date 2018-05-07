const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.create_user = function(req, res) {
  User.create(req.body);
  res.redirect('/');
};

exports.find_user = function(req, res) {
  User.findOne({username: req.body.username}, function(err, user) {
    if(err) { console.log(err); };
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if(result) {
        req.session.userId = user._id;
        res.redirect('/')
      } else { res.redirect('/'); }
    });
  });
};

exports.find_user_by_id = function(req, res) {
  if(req.session.userId) {
    User.findOne({_id: req.session.userId}, function(err, user) {
      if(err) {
        console.log(err);
      } else {
        res.render('index', { title: 'Home', user: user.username });
      }
    });
  } else {
    res.render('index', {title: 'Home', user: 'guest'});
  }
};
