var express = require('express');
var router = express.Router();
var session = require('express-session');
var BowlingGame = require('../src/BowlingGame');

var sess;
var game;
var errors;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Bowling Game'
  });
});

router.post('/start', function(req, res) {
    game = new BowlingGame();
    res.redirect('/play')
})

router.get('/play', function(req, res) {
    sess = req.session;
    sess.game = game;

    if (game === undefined) {
        game = new BowlingGame()
    }

    res.render('play', {
        game: game,
        errors: errors
  })
});

router.post('/play', function(req, res) {
    sess = req.session;
    sess.game = game;

    if (game === undefined) {
        game = new BowlingGame()
    }

    if (req.body.returnToPlay !== undefined) {
        game.rolls.splice(-1,1);
        res.render('play', {
            game: game
        })
    } else if (req.body.action !== undefined && !(isNaN(req.body.action))) {
        roll = parseInt(req.body.action);
        game.roll(roll);
        res.render('play', {
            game: game
        })
    }

});

module.exports = router;
