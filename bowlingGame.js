class BowlingGame {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  };

  score() {
    if (this.rolls.length === 0) {
      return 0;
    };

    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0 ; frame < 10 ; frame++) {
      if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        totalScore += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else {
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      };
    };

    return totalScore;
  }

};

module.exports = BowlingGame;