const Frame = require('./frame')

class BowlingGame {
  constructor() {
    this.framecount = 1;
    this.scoreSum = [];
  }

  play() {
    while (this.framecount < 10) {
      //kanei mallon alla pragmata prwta?
      let newFrame = new Frame();
      newFrame.playFrame();
      this.scoreSum.push(newFrame.score);
      framecount += 1;
    }
  }
}

module.exports = BowlingGame;
