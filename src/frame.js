const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;
const STRIKE_SCORE_ROUND = 3;


class Frame {
  constructor(strikeRound = STRIKE_ROUND, spareRound = STANDARD_ROUND) {
    this.rounds = [];
    this.rules = {
      strike: { length: strikeRound, scoreLength: STRIKE_SCORE_ROUND },
      spare: { length: spareRound, scoreLength: STRIKE_SCORE_ROUND },
      normal: { length: STANDARD_ROUND, scoreLength: STANDARD_ROUND },
    };
    this.round = this.rules.normal
  }

  score() {
    const validRolls = this.rounds.slice(0, this.round.scoreLength);
    return this.add(validRolls);
  }

  roll(value) {
    if (this.rounds.length < STRIKE_SCORE_ROUND) { this.rounds.push(value); }
    this.result();
  }

  isFinished() {
    return this.rounds.length >= this.round.length;
  }

  // need to make private
  result() {
    let type = 'normal'
    if (this.firstRoll() === STRIKE) { type = 'strike'; }
    if (this.firstRoll() + this.secondRoll() === STRIKE) { type = 'spare'; }
    this.round = this.rules[type];
  }

  add(results) {
    return results.reduce((a, b) => a + b, 0);
  }


  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = Frame;
