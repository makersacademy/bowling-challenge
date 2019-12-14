const Frame = require('./frame');

class ScoreCard {
  constructor(allFrames = [], frame = new Frame()) {
    this.currentFrame = 1;
    this.allFrames = allFrames;
    this.frame = frame;
  }

  nextFrame() {
    this.currentFrame += 1;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  setRollOne(score) {
    this.allFrames.push(this.frame);
    this.frame.setRollOne(score);
  }

  setRollTwo(score) {
    if (!this.frame.getRollOne()) { throw new Error(this.NO_FIRST_ROLL()); }

    this.frame.setRollTwo(score);
    this.frame = new Frame();
    this.nextFrame();
  }

  getTotalScore() {
    let totalScore = 0;

    this.allFrames.forEach((frame) => {
      totalScore += frame.getScore();
    });

    return totalScore;
  }

  static NO_FIRST_ROLL() {
    return `Roll One of frame ${this.currentFrame} has not been recorded`;
  }
}

module.exports = ScoreCard;
