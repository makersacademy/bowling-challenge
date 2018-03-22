const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;
const STRIKE_SCORE_ROUND = 3;

class Frame {
  constructor() {
    this.rules = {
      strike: { length: STRIKE_ROUND, bonus: true },
      spare: { length: STANDARD_ROUND, bonus: true },
      normal: { length: STANDARD_ROUND, bonus: false },
    };
    this.rounds = [];
    this.bonus = [];
  }

  score() {
    return this.rollsForScores().reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < this.frameRules().length) {
      this.rounds.push(value);
    } else if (this.bonus.length < STRIKE_SCORE_ROUND - this.frameRules().length) {
      this.bonus.push(value);
    }
  }

  isFinished() {
    return this.rounds.length === this.frameRules().length;
  }

  view() {
    return this.rounds;
  }

  // need to make private
  frameRules() {
    if (this.firstRoll() === STRIKE) { return this.rules.strike; }
    if (this.firstRoll() + this.secondRoll() === STRIKE) { return this.rules.spare; }
    return this.rules.normal;
  }

  rollsForScores() {
    return (this.frameRules().bonus) ? [...this.rounds, ...this.bonus] : this.rounds;
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = Frame;
