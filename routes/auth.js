const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

router.post('/signup', authController.signup);
router.get('/signup', (req, res) => res.render('signup', { title: 'Sign Up' }));

router.get('/login', (req, res) => res.render('login', { title: 'Log In' }));
router.post('/login', userController.find_user);

router.get('/me', authController.getName);

module.exports = router;
