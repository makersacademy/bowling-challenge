const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;

class Frame {
  constructor(strike = STRIKE_ROUND) {
    this.rounds = [];
    this.strikeRound = strike
  }

  score() {
    if (this.useThird()) { return this.add(this.rounds); }
    return this.add(this.rounds.slice(0, STANDARD_ROUND));
  }

  roll(value) {
    if (this.rounds.length < 3) { this.rounds.push(value); }
  }

  isFinished() {
    if (this.rounds[0] === STRIKE) { return this.roundsAfterStrike(); }
    if (this.rounds.length === STANDARD_ROUND) { return true; }
    return false;
  }

  roundsAfterStrike() {
    return this.rounds.length === this.strikeRound
  }

  useThird() {
    const first = this.rounds[0];
    if (first === STRIKE) { return true; }
    if (first + this.rounds[1] === STRIKE) { return true; }
    return false;
  }

  add(results) {
    return results.reduce((a, b) => a + b, 0)
  }
}
