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
    let index = 0
    for (times = 0; times < 10; times++) {
      if (this.strike(index)) {
        score += this.strikeScore(index)
        index += 1
      }
      else if (this.spare(index)) {
        score += this.spareScore(index)
        index += 2
    } else {
        score += this.rolls[index] + this.rolls[index + 1]
        index += 2
      };
    };
    return score
  };

  strike(index) {
    return this.rolls[index] === 10
  }

  strikeScore(index) {
    return this.rolls[index] + this.rolls[index + 1] + this.rolls[index + 2]
  }

  spare(index) {
    return this.rolls[index] + this.rolls[index + 1] === 10 
  };

  spareScore(index) {
    return this.rolls[index] + this.rolls[index + 1] + this.rolls[index + 2]
  }

};

module.exports = BowlingGame;
