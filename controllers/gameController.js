const url = require('url'),
  Game = require('../models/game'),
  game = new Game(),
  User = require('../models/user');

exports.play = function(req, res) {
  game.play(+(req.body.pins));
  if(game.showStatus() == 'complete') {
    let currentScore = game.showScore();
    game.reset();
    res.render('score', { score: currentScore });
  } else {
      res.redirect(url.format({
        pathname:"/game/play",
        query: {
        'bonus': game.lastBonus(),
        'currentFrame': game.currentFrame(),
        'currentRoll': game.currentRoll(),
        'title': 'Play'
        }
      }))
    }
  }

exports.play_show = function(req, res) {
  res.render('play', { ...req.query, title: 'Play'});
};
