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
    let spareBonus = 0;
    this.scorecard.forEach((frame, index) => {
      const previousFrame = this.scorecard[index - 1];

      if (index > 0 && previousFrame.isSpare()) {
        spareBonus += frame.getFirst();
      }
    });
    return spareBonus;
  }

  calculateStrikes() {
    let strikeBonus = 0;
    this.scorecard.forEach((frame, index) => {
      const previousFrame = this.scorecard[index - 1];
      const nextFrame = this.scorecard[index + 1];

      if (index === 0) return;
      if (previousFrame.isStrike()) {
        strikeBonus += frame.getFirst();
        if (frame.isStrike() && index !== 9) {
          strikeBonus += nextFrame.getFirst();
        } else {
          strikeBonus += frame.getSecond();
        }
      }
    });
    return strikeBonus;
  }
}

module.exports = Game;
