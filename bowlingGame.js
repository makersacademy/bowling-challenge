const BowlingScoring = require('./bowlingScoring');

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

  endGame() {
    const scorecard = new BowlingScoring(this.scorecard);
    scorecard.calculate();
    return scorecard.getScore();
  }
}

module.exports = BowlingGame;