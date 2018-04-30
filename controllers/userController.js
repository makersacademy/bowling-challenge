const User = require('../models/user');

exports.create_user = function(req, res) {
  User.create({username: req.body.username, password: req.body.password});
  res.redirect('/');
};
