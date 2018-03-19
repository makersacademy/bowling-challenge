const STRIKE_FINAL = 10;
const STANDARD_ROUND_FINAL = 2;
const STRIKE_ROUND_FINAL = 3;

class FinalFrame {
  constructor() {
    this.rounds = [];
  }

  score() {
    return this.rounds.reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < this.gameLength()) { this.rounds.push(value); }
  }

  isFinished() {}

  view() {
    return this.rounds
  }

  // need to make private
  gameLength() {
    if (this.score() >= STRIKE_FINAL) { return STRIKE_ROUND_FINAL ;}
    return STANDARD_ROUND_FINAL
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = FinalFrame;
