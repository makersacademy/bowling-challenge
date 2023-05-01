const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
    this.MAX_FRAMES = 10;
  }

  addFrame(frame) {
    if (this.frames.length >= this.MAX_FRAMES) {
      throw new Error(`Maximum number of frames (${this.MAX_FRAMES}) reached.`);
    }
    this.frames.push(frame);
  }

  getScore() {
    return this.frames.reduce((totalScore, frame, index) => {
      const frameScore = frame.firstRoll + frame.secondRoll;
      totalScore += frameScore;

      if (frame.isStrike() && index < this.MAX_FRAMES - 1) {
        totalScore += this.calculateStrikeScore(index);
      } else if (frame.isSpare() && index < this.MAX_FRAMES - 1) {
        totalScore += this.calculateSpareScore(index);
      }

      return totalScore;
    }, 0);
  }

  calculateStrikeScore(index) {
    let bonus = 0;
    const nextFrame = this.frames[index + 1];
    const nextTwoRolls = [nextFrame.firstRoll, nextFrame.secondRoll];

    if (nextFrame.isStrike() && index < this.MAX_FRAMES - 2) {
      const thirdFrame = this.frames[index + 2];
      nextTwoRolls.push(thirdFrame.firstRoll);
    }

    bonus += nextTwoRolls.reduce((sum, roll) => sum + roll, 0);
    return bonus;
  }

  calculateSpareScore(index) {
    const nextFrame = this.frames[index + 1];
    const bonus = nextFrame.firstRoll;
    return bonus;
  }
}

module.exports = Scorecard;
