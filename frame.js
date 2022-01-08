class Frame {
  constructor() {
    this.score = 0;
    this.rolls = 0;
    // this.spare = false;
    // this.strike = false;
  }

  addRollScore(rollscore) {
    this.rolls += 1;
    this.score += rollscore;
  }

  isStrike() {
    return this.score === 10 && this.rolls === 1;
  }

  isSpare() {
    return this.score === 10 && this.rolls === 2;
  }
}

module.exports = Frame;
