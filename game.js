const Frame = require('./frame');
class Game {
  constructor() {
    this.frames = [];
    this.strikeCount = 0;
    this.spareCount = 0;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  score() {
    let total = 0;
    this.frames.forEach((frame) => {
      // points for roll
      total += frame.total();
      // bonus points for strike or spare
      if (this.spareCount > 0) {
        // spare previous frame add points for roll 1
        total += frame.roll1;
      } else if (this.strikeCount === 1) {
        // strike previous frame add total of rolls this frame as bonus points
        total += frame.total();
      } else if (this.strikeCount > 1) {
        // 2+ strikes in row previous frame add 2 * total of rolls
        // this frame as bonus points
        total += frame.total() * 2;
      }
      // counters for bonus points for next round
      if (frame.strike === true) {
        // if strike this round +1 strike, reset spare
        this.strikeCount += 1;
        this.spareCount = 0;
      } else if (frame.spare === true) {
        // if spare + 1 and reset strike
        this.spareCount += 1;
        this.strikeCount = 0;
      } else {
        //  no strike or spare reset both
        this.strikeCount = 0;
        this.spareCount = 0;
      }
    });
    return total;
  }
}

module.exports = Game;

// let frame1 = new Frame();
// frame1.addRoll(6);
// frame1.addRoll(4);
// let frame2 = new Frame();
// frame2.addRoll(4);
// frame2.addRoll(4);
// let game = new Game();
// game.addFrame(frame1);
// game.addFrame(frame2);
// game.score();
