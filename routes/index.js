var express = require('express');
var router = express.Router();
var BowlingGame = require('../src/BowlingGame');

var game;

router.get('/', function(req, res) {
	res.render('index', {
		title: 'Bowling Calculator'
	});
});

router.post('/home', function(req, res) {
	res.redirect('/');
});

router.post('/start', function(req, res) {
	game = new BowlingGame();
	res.redirect('/play');
});

router.get('/play', function(req, res) {
	if (game === undefined) {
		game = new BowlingGame();
	}

	res.render('play', {
		game: game
	});
});

router.post('/play', function(req, res) {
	if (game === undefined) {
		game = new BowlingGame();
	}

	if (req.body.returnToPlay !== undefined) {
		game.rolls.splice(-1,1);
		res.render('play', {
			game: game
		});
	} else if (req.body.action !== undefined && !(isNaN(req.body.action))) {
		roll = parseInt(req.body.action);
		game.roll(roll);
		res.render('play', {
			game: game
		});
	}
});

module.exports = router;
