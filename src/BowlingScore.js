function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
  this.MAX_SCORE = 10;
  this.maxScore = this.MAX_SCORE;
  this.isFirstBowl = true;
  this.bowlScore = [];
  this.frameScore = [];
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
    this._updateFrameScore();
    this.isFirstBowl = true;
  }
};

BowlingScore.prototype._updateFrameScore = function () {
  this.frameScore.push(this.bowlScore[0] + this.bowlScore[1]);
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

BowlingScore.prototype.showFrameScore = function (frame) {
  return this.frameScore[frame - 1]
};
