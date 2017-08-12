function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
  this.MAX_SCORE = 10;
  this.maxScore = this.MAX_SCORE;
  this.isFirstBowl = true;
}

BowlingScore.prototype.enterBowlingScore = function (score) {
  if (this.isFirstBowl) {
    if (score > this.maxScore) throw "Maximum score is 10"
    this.totalScore += score;
    this.isFirstBowl = false;
  } else {
    this.totalScore += score;
    this.isFirstBowl = true;
  }
};

BowlingScore.prototype.showTotalScore = function () {
  return this.totalScore;
};

BowlingScore.prototype.isThisFirstBowl = function () {
  return this.isFirstBowl;
};
