const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;
const STRIKE_SCORE_ROUND = 3;

class Frame {
  constructor(strikeRound = STRIKE_ROUND, spareRound = STANDARD_ROUND) {
    this.rules = {
      strike: { length: strikeRound, bonus: true },
      spare: { length: spareRound, bonus: true },
      normal: { length: STANDARD_ROUND, bonus: false },
    };
    this.rounds = [];
    this.bonus = [];
    this.rulesToFollow = this.rules['normal'];
  }

  score() {
    return this.rollsForScores().reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < this.rulesToFollow.length) { this.rounds.push(value); }
    else if(this.bonus.length < STRIKE_SCORE_ROUND - this.rulesToFollow.length) { this.bonus.push(value) }
    this.resultType();
  }

  isFinished() {
    return this.rounds.length === this.rulesToFollow.length;
  }

  view() {
    return this.rounds
  }

  // need to make private
  resultType() {
    let type = 'normal';
    if (this.firstRoll() === STRIKE) { type = 'strike'; }
    if (this.firstRoll() + this.secondRoll() === STRIKE) { type = 'spare'; }
    this.rulesToFollow = this.rules[type];
  }

  rollsForScores() {
    return (this.rulesToFollow.bonus) ? this.rounds.concat(this.bonus) : this.rounds;
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = Frame;
