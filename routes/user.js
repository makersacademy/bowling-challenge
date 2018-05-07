const express = require('express'),
      router = express.Router(),
      userController = require('../controllers/userController');

router.get('/new', function(req, res) {
  res.render('signup', { title: 'Sign Up' });
});

router.post('/new', userController.create_user);

router.get('/login', function(req, res) {
  res.render('login', { title: 'Log In' });
});

router.post('/login', userController.find_user);

module.exports = router;
