class BowlingGame {

  constructor() {
    this.rolls = []
  }

  roll(pins) {
    this.rolls.push(pins)
    // console.log(this.rolls)
  };

  score() {
    return this.rolls.reduce((a, b) => a + b)
  };

};

module.exports = BowlingGame;
