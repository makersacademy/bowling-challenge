class Game {
  constructor() {
    this.scorecard = [];
  }

  add(frame) {
    this.scorecard.push(frame);
  }

  faceValue() {
    return this.scorecard.reduce((sum, current) => sum + current.getTotal(), 0);
  }

  calculateSpares() {
    let bonus = 0;
    this.scorecard.forEach((frame, index) => {
      if (index > 0 && this.scorecard[index - 1].isSpare()) {
        bonus += frame.getFirst();
      }
    });
    return bonus;
  }

  calculateStrikes() {
    let bonus = 0;
    this.scorecard.forEach((frame, index) => {
      if (
        index > 0 &&
        this.scorecard[index - 1].isStrike() &&
        !frame.isStrike()
      ) {
        bonus += frame.getFirst();
        bonus += frame.getSecond();
      } else if (
        index > 0 &&
        this.scorecard[index - 1].isStrike() &&
        frame.isStrike()
      ) {
        bonus += frame.getFirst();
        bonus += this.scorecard[index + 1].getFirst();
      }
    });
    return bonus;
  }
}

module.exports = Game;
