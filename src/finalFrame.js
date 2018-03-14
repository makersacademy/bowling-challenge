const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 3;

class FinalFrame {
  constructor() {
    this.rules = {
      strike: { length: STRIKE_ROUND, bonus: true },
      spare: { length: STRIKE_ROUND, bonus: true },
      normal: { length: STANDARD_ROUND, bonus: false },
    };
    this.rounds = [];
    this.frame = this.rules['normal'];
  }

  score() {
    return this.round().reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < this.frame.length) { this.rounds.push(value); }
    this.resultType();
  }

  isFinished() {
  }

  view() {
    return this.rounds
  }

  // need to make private
  resultType() {
    let type = 'normal';
    if (this.firstRoll() === STRIKE) { type = 'strike'; }
    if (this.firstRoll() + this.secondRoll() === STRIKE) { type = 'spare'; }
    this.frame = this.rules[type];
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = FinalFrame;
