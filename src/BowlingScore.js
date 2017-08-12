function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
}

BowlingScore.prototype.showTotalScore = function () {
  return this.totalScore;
};
