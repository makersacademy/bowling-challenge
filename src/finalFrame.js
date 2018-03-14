const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 3;

class FinalFrame {
  constructor() {
    this.gameLength = STANDARD_ROUND
    this.rounds = [];
  }

  score() {
    return this.rounds.reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < this.gameLength) { this.rounds.push(value); }
    this.resultType();
  }

  isFinished() {}

  view() {
    return this.rounds
  }

  // need to make private
  resultType() {
    if (this.firstRoll() === STRIKE || this.firstRoll() + this.secondRoll() === STRIKE) { return this.gameLength = STRIKE_ROUND; }
    return this.gameLength = STANDARD_ROUND
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = FinalFrame;
