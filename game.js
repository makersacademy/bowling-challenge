const Frame = require('./frame');

class Game {
  constructor(score) {
    this.score = [];
    this.frame = new Frame;
  };

  rollPins(pins) {
    if (this.frame.frameOver()) this.frame = new Frame;
    this.frame.rollPins(pins);
  };

  getScore() {
    return this.frame.getScore();
  };
}

// const game = new Game;
// game.rollPins(4);
// console.log(game.getScore());
// game.rollPins(7);
// console.log(game.getScore());
// game.rollPins(7);
// console.log(game.getScore());

module.exports = Game