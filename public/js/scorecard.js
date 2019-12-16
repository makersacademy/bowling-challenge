/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// const Frame = require('./frame');
// const FinalFrame = require('./finalFrame');

class ScoreCard {
  constructor(allFrames = [], frame = new Frame()) {
    this.frame = frame;
    this.currentFrame = 1;
    this.allFrames = allFrames;
  }

  addName(name) {
    this.playerName = name;
  }

  getName() {
    return this.playerName;
  }

  nextFrame() {
    this.currentFrame += 1;

    if (this.currentFrame === 10) {
      this.frame = new FinalFrame();
    } else {
      this.frame = new Frame();
    }
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  setRollOne(score) {
    this.frame.setRollOne(score);
    this.allFrames.push(this.frame);
    this.strikesAndSpares(score);
    if (score === 10 && this.currentFrame < 10) { this.frame.isA('strike'); this.nextFrame(); }
  }

  setRollTwo(score) {
    if (!this.frame.getRollOne()) { throw new Error(ScoreCard.NO_FIRST_ROLL()); }
    if (!ScoreCard.numbers().includes(score)) { throw new Error(ScoreCard.INVALID_SCORE()); }
    if (this.currentFrame < 10 && this.frame.getRollOne() + score > 10) {
      throw new Error(ScoreCard.INVALID_SCORE());
    }

    this.frame.setRollTwo(score);
    this.strikesAndSpares(score);
    if (this.frame.getScore() === 10) { this.frame.isA('spare'); }
    if (this.currentFrame < 10) { this.nextFrame(); }
  }

  setRollThree(score) {
    if (!this.frame.getRollOne() || !this.frame.getRollTwo()) {
      throw new Error(ScoreCard.NO_FIRST_OR_SECOND_ROLL());
    }
    if (this.frame.getRollOne() + this.frame.getRollTwo() + score > 30 || score > 10) {
      throw new Error(ScoreCard.INVALID_SCORE());
    }

    this.frame.setRollThree(score);
    this.strikesAndSpares(score);
  }

  getTotalScore() {
    let totalScore = 0;
    this.allFrames.forEach((frame) => { totalScore += frame.getScore(); });
    return totalScore;
  }

  strikesAndSpares(points) {
    const firstNineFrames = this.allFrames.slice(0, 9);
    firstNineFrames.forEach((frame) => {
      if (frame.hasBonusTurnsLeft()) {
        frame.awardBonus(points);
        frame.dropBonusTurn();
      }
    });
  }

  static NO_FIRST_ROLL() {
    return 'Roll One of the current frame has not been recorded';
  }

  static NO_FIRST_OR_SECOND_ROLL() {
    return 'Both of previous rolls of the current frame must be recorded';
  }

  static INVALID_SCORE() {
    return 'Invalid entry';
  }

  static numbers() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
}

// module.exports = ScoreCard;
