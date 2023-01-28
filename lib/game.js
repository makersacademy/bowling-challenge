class Game {
  constructor() {
    this.scorecard = [];
    this.frameCount = 1;
  }

  add(frame) {
    this.scorecard.push(frame);
    this.frameCount++;
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

      if (index === 0) return;
      if (previousFrame.isStrike()) {
        bonus += frame.getFirst();
        if (frame.isStrike() && index !== 9) {
          bonus += nextFrame.getFirst();
        } else {
          bonus += frame.getSecond();
        }
      }
    });
    return bonus;
  }
}

module.exports = Game;
