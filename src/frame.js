const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;

class Frame {
  constructor(strike = STRIKE_ROUND) {
    this.rounds = [];
    this.strikeRound = strike
  }

  score() {
    if (this.strike()) { return this.add(this.rounds); }
    return this.add(this.rounds.slice(0, STANDARD_ROUND));
  }

  roll(value) {
    if (this.rounds.length <= STANDARD_ROUND) { this.rounds.push(value); }
  }

  isFinished() {
    if (this.firstRoll() === STRIKE) { return this.roundsAfterStrike(); }
    if (this.rounds.length === STANDARD_ROUND) { return true; }
    return false;
  }


  // need to make private
  roundsAfterStrike() {
    return this.rounds.length === this.strikeRound
  }

  strike() {
    return (this.firstRoll() == STRIKE || this.firstRoll() + this.secondRoll() === STRIKE);
  }

  add(results) {
    return results.reduce((a, b) => a + b, 0)
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll(){
    return this.rounds[1];
  }
}
