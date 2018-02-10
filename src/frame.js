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
    this.rulesToFollow = 'normal';
  }

  score() {
    return this.rollsForScores().reduce((a, b) => a + b, 0);
  }

  roll(value) {
    if (this.rounds.length < STRIKE_SCORE_ROUND) { this.rounds.push(value); }
    this.resultType()
  }

  isFinished() {
    return this.rounds.length >= this.rulesToFollow.length;
  }

  // need to make private
  resultType() {
    let type = 'normal'
    if (this.firstRoll() === STRIKE) { type = 'strike'; }
    if (this.firstRoll() + this.secondRoll() === STRIKE) { type = 'spare'; }
    this.rulesToFollow = this.rules[type];
  }

  rollsForScores() {
    return this.rounds.slice(0, this.rulesToFollow.scoreLength);
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}

module.exports = Frame;
