const STRIKE = 10;
const STANDARD_ROUND = 2;
const STRIKE_ROUND = 1;

class Frame {
  constructor(strikeRound = STRIKE_ROUND) {
    this.rounds = [];
    this.strikeRound = strikeRound;
    this.spareRound = (STANDARD_ROUND > strikeRound) ? STANDARD_ROUND : strikeRound;
  }

  score() {
    const validRolls = (this.strike()) ? this.rounds : this.rounds.slice(0, STANDARD_ROUND)
    return this.add(validRolls);
  }

  roll(value) {
    if (this.rounds.length <= STANDARD_ROUND) { this.rounds.push(value); }
  }

  isFinished() {
    if (this.firstRoll() === STRIKE) { return this.roundsAfterStrike(); }
    if (this.strike()) { return this.rounds.length >= this.spareRound }
    return (this.rounds.length >= STANDARD_ROUND);
  }


  // need to make private
  roundsAfterStrike() {
    return this.rounds.length === this.strikeRound
  }

  strike() {
    return (this.firstRoll() === STRIKE || this.firstRoll() + this.secondRoll() === STRIKE);
  }

  add(results) {
    return results.reduce((a, b) => a + b, 0)
  }

  firstRoll() {
    return this.rounds[0];
  }

  secondRoll() {
    return this.rounds[1];
  }
}
