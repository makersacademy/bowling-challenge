const url = require('url');
const Game = require('../models/game');
const game = new Game();

exports.play = function(req, res) {
  game.play(+(req.body.pins));
  if(game.showStatus() == 'complete') {
    res.render('score', { score: game.showScore()});
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
