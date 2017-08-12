function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
  this.MAX_SCORE = 10;
  this.maxScore = this.MAX_SCORE;
  this.isFirstBowl = true;
  this.frame = [];
}

BowlingScore.prototype.enterBowlingScore = function (score) {
  if (this.isFirstBowl) {
    if (score > this.maxScore) throw "Maximum score is 10"
    this.frame.push(score)
    this.totalScore += score;
    this.isFirstBowl = false;
  } else {
    if ((this.frame[0] + score) > this.maxScore) throw "Maximum total score is 10"
    this.frame.push(score)
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
