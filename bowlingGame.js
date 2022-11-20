const BowlingScoring = require('./bowlingScoring');

class BowlingGame {
  constructor() {
    this.scorecard = [];
  }

  addScore(score) {
    if (this.scorecard.length < 10) {
      this.scorecard.push(score);
    } else {
      return 'Game scorecard complete (10/10 frames). Cannot add another score.';
    }
  }

  removeLast() {
    this.scorecard.pop();
  }

  getFramesPlayed() {
    return `Frames played so far: ${this.scorecard.length} / 10.`;
  }

  getScorecard() {
    return this.scorecard;
  }

  resetScorecard() {
    this.scorecard = [];
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