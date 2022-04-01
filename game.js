const Frame = require('./frame');

class Game {
  constructor(score) {
    this.score = [];
    this.frame = new Frame;
    this.max_frames = 10;
  };

  rollPins(pins) {
    if (this.totalScore().length === this.max_frames) return this._gameOver();
    this.frame.rollPins(pins);

    if (this.frame.frameOver()) {
      this.score.push(this._frameScore());
      this.frame = new Frame;
    };
  };

  totalScore() {
    return this.score
  };

  _frameScore() {
    return this.frame.getScore();
  }

  _gameOver() {
    return "game over"
    // break
  }
};

const game = new Game;
// 1
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
// 2
game.rollPins(7);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
// 3
game.rollPins(10);
console.log(game.totalScore());
// 4
game.rollPins(6);
console.log(game.totalScore());
game.rollPins(4);
console.log(game.totalScore());
// 5
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(4);
console.log(game.totalScore());
// 6
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
// 7
game.rollPins(0);
console.log(game.totalScore());
game.rollPins(0);
console.log(game.totalScore());
// 8
game.rollPins(0);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
// 9
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
// 10
game.rollPins(4);
console.log(game.totalScore());
game.rollPins(3);
console.log(game.totalScore());
// // 11
game.rollPins(1);
console.log(game.totalScore());
game.rollPins(1);
console.log(game.totalScore());

module.exports = Game