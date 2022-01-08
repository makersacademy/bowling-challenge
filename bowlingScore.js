class BowlingScore {
  constructor() {
    this.totalScore = 0;
    this.scorecard = [];
  }
  getTotalScore() {
    return this.totalScore;
  }
  addToScorecard(score) {
    this.scorecard.push(score);
  }
  getScorecard() {
    return this.scorecard
  }
}

module.exports = BowlingScore