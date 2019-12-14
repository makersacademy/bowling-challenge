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
    if (!this.frame.getRollOne()) { throw new Error(ScoreCard.NO_FIRST_ROLL()); }
    if (this.frame.getRollOne() + score > 10) { throw new Error(ScoreCard.INVALID_SCORE()); }

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
    return 'Roll One of the current frame has not been recorded';
  }

  static INVALID_SCORE() {
    return 'Invalid entry: the maximum rolled score per frame is 10';
  }
}

module.exports = ScoreCard;
