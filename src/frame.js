const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;
const STRIKE_SCORE_ROUND = 3;


class Frame {
  constructor(strikeRound = STRIKE_ROUND, spareRound = STANDARD_ROUND) {
    this.rounds = [];
    this.rules = {
      strike: [strikeRound, STRIKE_SCORE_ROUND], // note, this will become a class in the future
      spare: [spareRound, STRIKE_SCORE_ROUND],
      normal: [STANDARD_ROUND, STANDARD_ROUND],
    };
  }

  score() {
    const validRolls = this.rounds.slice(0, this.rules[this.result()][1]);
    return this.add(validRolls);
  }

  roll(value) {
    if (this.rounds.length < STRIKE_SCORE_ROUND) { this.rounds.push(value); }
  }

  isFinished() {
    return this.rounds.length >= this.rules[this.result()][0];
  }

  // need to make private
  result() {
    if (this.firstRoll() === STRIKE) { return 'strike'; }
    if (this.firstRoll() + this.secondRoll() === STRIKE) { return 'spare'; }
    return 'normal';
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
