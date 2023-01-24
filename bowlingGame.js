const BowlingScoring = require('./bowlingScoring');

class BowlingGame {
  constructor() {
    this.scorecard = [];
  }

  // adds a score from a frame to scorecard array
  addScore(score) {
    if (this.scorecard.length < 10) {
      this.scorecard.push(score);
    } else {
      return 'Game scorecard complete (10/10 frames). Cannot add another score.';
    }
  }

  // removes last frame score from scorecard array
  removeLast() {
    this.scorecard.pop();
  }

  // returns number of rames played so far
  getFramesPlayed() {
    return `Frames played so far: ${this.scorecard.length} / 10.`;
  }

  // returns scorecard array
  getScorecard() {
    return this.scorecard;
  }

  // returns current score
  getCurrentScore() {
    const scorecard = new BowlingScoring(this.scorecard);
    scorecard.calculate();
    return scorecard.getScore();
  }

  // removes all scores from scorecard array
  resetScorecard() {
    this.scorecard = [];
  }

  // returns final score if 10 frames have been inputted
  endGame() {
    if (this.scorecard.length < 10) {
      return `Scores only inputted for ${this.scorecard.length} / 10 frames. Input ${10 - this.scorecard.length} more for a complete game.`
    } else {
      const scorecard = new BowlingScoring(this.scorecard);
      scorecard.calculate();
      return scorecard.getScore();
    }
  }
}

module.exports = BowlingGame;