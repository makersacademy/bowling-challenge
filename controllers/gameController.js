const url = require('url'),
  Game = require('../models/game'),
  game = new Game();

exports.play = (req, res) => {
  //play the game
  game.play(+(req.body.pins));
  if(game.showStatus() == 'complete') {
    let currentScore = game.showScore();
    //game complete- reset for next game and return score
    game.reset();
    res.render('score', { score: currentScore });
  } else {
      //game not complete
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

exports.play_show = (req, res) => {
  res.render('play', { ...req.query, title: 'Play'});
};
