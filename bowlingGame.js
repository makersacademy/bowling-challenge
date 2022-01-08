const Frame = require('./frame');

class BowlingGame {
  constructor() {
    this.framecount = 1;
    this.scoreSum = [];
  }

  play() {
    let prevFrame = new Frame();
    while (this.framecount < 10) {
      const currentFrame = this.playFrame();
      let currScore = 0;
      if prevFrame.isStrike() {
        currScore = 10 + currentFrame.score
      } else if prevFrame.isSpare() {
        currScore = 5 + currentFrame.score
      } else {
        currScore = currentFrame.score
      }
      this.scoreSum.push(currScore);
      framecount += 1;
      prevFrame = currentFrame
    }
  }

  getRollScore() {
    return prompt();
  }

  playFrame() {
    const currentFrame = new Frame();
    let rollcount = 1;
    while (rollcount <= 2) {
      currentFrame.addRollScore(this.getRollScore());
      if (currentFrame.score === 10 && rollcount === 1) {
        // it's a strike
        currentFrame.strike = true;
        break;
      } else if (currentFrame.score === 10 && rollcount === 2) {
        currentFrame.spare = true;
      }else {
        rollcount += 1;
      }
    }
    return currentFrame;
  }
}


module.exports = BowlingGame;
