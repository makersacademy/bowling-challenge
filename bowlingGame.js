const Frame = require('./frame');

class BowlingGame {
  constructor() {
    this.frames = [];
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
        currScore = currentFrame.getFrameScoresSum;
      }
      this.frames.push(currScore);
      prevFrame = currentFrame;
    }
  }

  play() {
    for (let i = 0; i<10; i++) {
      const currentFrame = this.playFrame();
      if (this.frames.at(-1).isSpare) {
        this.frames.at(-1).frameScores.push(currentFrame.frameScores[0]);
      } else if (this.frames.at(-1).isStrike) {

      }

      this.frames.push(currentFrame);
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
