const Frame = require('./frame');

class Game {
  constructor(score) {
    this.score = [];
    this.frame = new Frame;
  };

  rollPins(pins) {
    this.frame.rollPins(pins);

    if (this.frame.frameOver()) {
      this.score.push(this.frame.finalScore());
      this.frame = new Frame;
    };
  };

  totalScore() {
    return this.score
  };
};

const game = new Game;
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
game.rollPins(7);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
game.rollPins(10);
console.log(game.totalScore());
game.rollPins(6);
console.log(game.totalScore());
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(4);

console.log(game.totalScore());

module.exports = Game