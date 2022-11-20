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
    if (this.scorecard.length < 10) {
      return `You only have scores for ${this.scorecard.length} / 10 frames. Input ${10 - this.scorecard.length} more for a complete game.`
    } else {
      const scorecard = new BowlingScoring(this.scorecard);
      scorecard.calculate();
      return scorecard.getScore();
    }
  }
}

module.exports = BowlingGame;