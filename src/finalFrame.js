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
    this.extraRound();
  }

  isFinished() {}

  view() {
    return this.rounds
  }

  // need to make private
  extraRound() {
    if (this.firstRoll() === STRIKE || this.firstRoll() + this.secondRoll() === STRIKE) {
      this.gameLength = STRIKE_ROUND;
    }
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = FinalFrame;
