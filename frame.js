class Frame {
  constructor() {
    this.score = 0;
    this.spare = false;
    this.strike = false;
  }

  addRollScore(rollscore) {
    this.score += rollscore;
  }
}

module.exports = Frame;
