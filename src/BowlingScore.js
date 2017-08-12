function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
  this.MAX_SCORE = 10;
  this.maxScore = this.MAX_SCORE;
  this.isFirstBowl = true;
  this.bowlScore = [];
  this.frameScore = [];
  this.DEFAULT_BOWL_COUNT = 0;
  this.bowlCount = this.DEFAULT_BOWL_COUNT;
  this.DEFAULT_END_OF_GAME_COUNT = 20;
  this.endOfGameCount = this.DEFAULT_END_OF_GAME_COUNT;
}

BowlingScore.prototype.enterBowlingScore = function (score) {
  if (this.isThisFirstBowl() && score != 10) {
    if (score > this.maxScore) throw "Maximum score is 10"
    if (this._isItEndOfGame()) throw "End of Game!"
    this.bowlScore.push(score)
    this._changeFirstBowl();
    this._incrementBowlCount();
  } else if (this.isThisFirstBowl() && score == 10) {
    if (this._isItEndOfGame()) throw "End of Game!"
    this.bowlScore.push(score)
    this.bowlScore.push(0)
    this._incrementBowlCount();
  } else {
    if ((this.bowlScore[0] + score) > this.maxScore) throw "Maximum total score is 10"
    this.bowlScore.push(score)
    this._updateFrameScore();
    this._updateTotalScore(this.frameScore);
    this._changeFirstBowl();
    this._incrementBowlCount();
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

BowlingScore.prototype.showFrameScore = function (frame) {
  return this.frameScore[frame - 1]
};

BowlingScore.prototype._updateTotalScore = function (numbers) {
  this.totalScore = numbers.reduce(function(sum, framescore) { return sum + framescore; });
};

BowlingScore.prototype._changeFirstBowl = function () {
  this.isFirstBowl = !this.isFirstBowl;
};

BowlingScore.prototype._incrementBowlCount = function () {
  this.bowlCount++;
};

BowlingScore.prototype._updateFrameScore = function () {
  this.frameScore.push(this.bowlScore[this.bowlCount] + this.bowlScore[this.bowlCount]);
};

BowlingScore.prototype._isItEndOfGame = function () {
  return this.bowlCount === this.endOfGameCount;
};
