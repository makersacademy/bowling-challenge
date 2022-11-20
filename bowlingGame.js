class BowlingGame {
  constructor() {
    this.scorecard = [];
  }

  addScore(score) {
    this.scorecard.push(score);
  }

  getScorecard() {
    return this.scorecard;
  }
}

module.exports = BowlingGame;