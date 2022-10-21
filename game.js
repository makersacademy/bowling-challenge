const Frame = require('./frame');
class Game {
  constructor() {
    this.frames = [];
    this.double = false;
    this.strikeCount = 0;
    this.spareCount = 0;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  score() {
    let total = 0;
    this.frames.forEach((frame) => {
      total += frame.total();
      if (frame.spare === true) {
        total += frame.roll1;
      } else if (this.strikeCount === 1) {
        total += frame.total();
      } else if (this.strikeCount > 1) {
        total += frame.total() * 2;
      }
      if (frame.strike === true) {
        this.strikeCount += 1;
      }
    });
    return total;
  }
}

module.exports = Game;

// let frame1 = new Frame();
// frame1.addRoll(2);
// frame1.addRoll(4);
// let frame2 = new Frame();
// frame2.addRoll(4);
// frame2.addRoll(4);
// let game = new Game();
// game.addFrame(frame1);
// game.addFrame(frame2);
// game.score();
