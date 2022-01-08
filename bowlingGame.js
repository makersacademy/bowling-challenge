const Frame = require('./frame');

class BowlingGame {
  constructor() {
    this.framecount = 1;
    this.scoreSum = [];
  }

  play() {
    let prevFrame = new Frame();
    for (let i = 0; i<10; i++) {
      const currentFrame = this.playFrame();
      let currScore = 0;
      if (prevFrame.isStrike) {
        currScore = 10 + currentFrame.score;
      } else if (prevFrame.isSpare) {
        currScore = 5 + currentFrame.score;
      } else {
        currScore = currentFrame.score;
      }
      this.scoreSum.push(currScore);
      prevFrame = currentFrame;
    }
  }

  getRollScore() {
    return prompt();
  }

  playFrame() {
    const currentFrame = new Frame();
    for (let i = 0; i<2; i++) {
      currentFrame.addRollScore(this.getRollScore());
      if (currentFrame.isStrike()) {
        break;
      }
    }
    return currentFrame;
  }
}


module.exports = BowlingGame;
