const Frame = require('./frame');

class ScoreCard {
  constructor(allFrames = [], frame = new Frame()) {
    this.frame = frame;
    this.currentFrame = 1;
    this.allFrames = allFrames;
  }

  nextFrame() {
    this.frame = new Frame();
    this.currentFrame += 1;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  setRollOne(score) {
    this.allFrames.push(this.frame);
    this.frame.setRollOne(score);
    this.strikesAndSpares(score);

    const strike = 10;
    if (score === strike) { this.frame.isA('strike'); this.nextFrame(); }
  }

  setRollTwo(score) {
    if (!this.frame.getRollOne()) { throw new Error(ScoreCard.NO_FIRST_ROLL()); }
    if (this.frame.getRollOne() + score > 10) { throw new Error(ScoreCard.INVALID_SCORE()); }

    this.frame.setRollTwo(score);
    this.strikesAndSpares(score);
    this.nextFrame();
  }

  getTotalScore() {
    let totalScore = 0;
    this.allFrames.forEach((frame) => { totalScore += frame.getScore(); });
    return totalScore;
  }

  strikesAndSpares(points) {
    this.allFrames.forEach((frame) => {
      if (frame.hasBonusTurnsLeft()) {
        frame.awardBonus(points);
        frame.dropBonusTurn();
      }
    });
  }

  static NO_FIRST_ROLL() {
    return 'Roll One of the current frame has not been recorded';
  }

  static INVALID_SCORE() {
    return 'Invalid entry: the maximum rolled score per frame is 10';
  }
}

module.exports = ScoreCard;
