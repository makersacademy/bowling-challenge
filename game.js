const Frame = require('./frame');
class Game {
  constructor() {
    this.frames = [];
    this.strikeCount = 0;
    this.spareCount = 0;
    this.total = 0;
    this.tenthBalls = 0;
    this.whichFrame = 0;
    this.tenth = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  tenthFrameArray(frame) {
    // 10 is knackers my old way of doing stuff
    // so im sticking the results in an array
    if (frame.roll1 < 10) {
      this.tenth.push(frame.roll1, frame.roll2);
    } else {
      this.tenth.push(frame.roll1);
    }
  }

  tenthBonus() {
    // standard points have already added this is just
    // bonus points for spare, strike or double going into frame 10
    if (this.spareCount > 0) {
      this.total += this.tenth[0];
    } else if (this.strikeCount === 1) {
      if (this.tenth[0] < 10) {
        this.total += this.tenth[0] + this.tenth[1];
      } else {
        this.total += this.tenth[0];
      }
    } else if (this.strikeCount > 1) {
      // if frame 9 was double
      // frame 8 gets roll1, 9 gets roll 1+2
      this.total += this.tenth[0];
      this.total += this.tenth[0] + this.tenth[1];
    }
  }

  // setBonusCounter() {}

  score() {
    this.frames.forEach((frame) => {
      this.whichFrame += 1;
      // points for roll for every frame before bonuses
      this.total += frame.total();
      if (this.whichFrame > 9) {
        //  route for frame ten weirdness
        this.tenthFrameArray(frame);
      } else if (this.spareCount > 0) {
        // spare previous frame add points for roll 1
        this.total += frame.roll1;
      } else if (this.strikeCount === 1) {
        // strike previous frame add total of rolls this frame as bonus points
        this.total += frame.total();
      } else if (this.strikeCount > 1) {
        // 2+ strikes in row previous frame add 2 * total of rolls
        // this frame as bonus points
        this.total += frame.total() * 2;
      }
      // counters for bonus points for next round
      if (this.whichFrame > 9) {
      } else if (frame.strike === true) {
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
    // route to add up 10th
    if (this.whichFrame > 9) {
      this.tenthBonus();
    }
    return this.total;
  }
}

module.exports = Game;

// let frame = new Frame();
// frame.addRoll(5);
// frame.addRoll(5);
// let game = new Game();
// for (let i = 0; i < 9; i++) {
//   game.addFrame(frame);
// }
// let frame2 = new Frame();
// frame2.addRoll(3);
// frame2.addRoll(5);
// game.addFrame(frame2);
// game.score();
