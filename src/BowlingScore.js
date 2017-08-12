function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
  this.MAX_SCORE = 10;
  this.maxScore = this.MAX_SCORE;
  this.isFirstBowl = true;
  this.bowlScore = [];
}

BowlingScore.prototype.enterBowlingScore = function (score) {
  if (this.isFirstBowl) {
    if (score > this.maxScore) throw "Maximum score is 10"
    this.bowlScore.push(score)
    this.totalScore += score;
    this.isFirstBowl = false;
  } else {
    if ((this.bowlScore[0] + score) > this.maxScore) throw "Maximum total score is 10"
    this.bowlScore.push(score)
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

BowlingScore.prototype.showBowlScore = function (bowl) {
  return this.bowlScore[bowl - 1];
};
