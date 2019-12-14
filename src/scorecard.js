const Frame = require('./frame');

class ScoreCard {
  constructor(allFrames = []) {
    this.currentFrame = 1;
    this.allFrames = allFrames;
  }

  nextFrame() {
    this.currentFrame += 1;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  setRollOne(score) {
    this.frame = new Frame();
    this.allFrames.push(this.frame);
    this.frame.setRollOne(score);
  }

  setRollTwo(score) {
    this.frame.setRollTwo(score);
  }

  getTotalScore() {
    let totalScore = 0;

    this.allFrames.forEach((frame) => {
      totalScore += frame.getScore();
    });

    return totalScore;
  }
}

module.exports = ScoreCard;
