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

exports.find_user_by_id = function(id) {
  User.findOne({_id: id}, function(err, user) {
    if(err) {
    } else {
      console.log('The name is ' + user.username);
      return user.username;
    }
  });
};
