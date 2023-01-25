const Frame = require('../lib/frame');
class Game {
  constructor() {
    this.scorecard = [];
  }

  add(frame) {
    this.scorecard.push(frame);
  }

  calculateFaceValue() {
    return this.scorecard.reduce((sum, current) => sum + current.getTotal(), 0);
  }

  calculateGrandTotal() {
    return this.calculateFaceValue() + this.calculateBonus();
  }

  calculateBonus() {
    return this.calculateSpares() + this.calculateStrikes();
  }

  calculateSpares() {
    let bonus = 0;
    this.scorecard.forEach((frame, index) => {
      const previousFrame = this.scorecard[index - 1];

      if (index > 0 && previousFrame.isSpare()) {
        bonus += frame.getFirst();
      }
    });
    return bonus;
  }

  calculateStrikes() {
    let bonus = 0;
    this.scorecard.forEach((frame, index) => {
      const previousFrame = this.scorecard[index - 1];
      const nextFrame = this.scorecard[index + 1];
      let firstNineFrames = index > 0 && index < 9;
      if (firstNineFrames && previousFrame.isStrike() && !frame.isStrike()) {
        bonus += frame.getFirst() + frame.getSecond();
      } else if (
        firstNineFrames &&
        previousFrame.isStrike() &&
        frame.isStrike()
      ) {
        bonus += frame.getFirst() + nextFrame.getFirst();
      } else if (index === 9 && previousFrame.isStrike()) {
        bonus += frame.getFirst() + frame.getSecond();
      }
    });
    return bonus;
  }
}

module.exports = Game;
