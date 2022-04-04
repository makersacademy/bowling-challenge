class Frame {

  constructor() {
    this.rolls = [];
    this.scoretry = 0;
    this.bonus_score = 0;
  }

  rolled(pins) {
    this.rolls.push(pins);
  }

  score() {
    return this.rolls.reduce((tot, curr) => tot + curr);
  }

  isNextTurn() {
    if (this.isStrike() === true || this.rolls.length === 2) {
      return true 
    } else {
      return false
    }
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    return this.score() === 10 && this.isStrike() === false;
  }

}

module.exports = Frame;

