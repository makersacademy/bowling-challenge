class BowlingGame {

  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
    // console.log(this.rolls)
  };

  score() {
    let score = 0
    let scoreIndex = 0
    for (times = 0; times < 10; times++) {
      if ((this.rolls[scoreIndex] + this.rolls[scoreIndex + 1]) === 10) {
        score += this.rolls[scoreIndex] + this.rolls[scoreIndex + 1] + this.rolls[scoreIndex + 2]
      } else {
        score += this.rolls[scoreIndex] + this.rolls[scoreIndex + 1]
      };
      scoreIndex += 2
    };
    // return this.rolls.reduce((a, b) => a + b)
    return score
  };

};

module.exports = BowlingGame;
