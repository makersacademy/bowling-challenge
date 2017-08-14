function Bowling() {
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
  this.DEFAULT_FRAME_COUNT = 0;
  this.frameCount = this.DEFAULT_FRAME_COUNT;
}

Bowling.prototype.enterBowlingScore = function (score) {
  if (this.isThisFirstBowl() && score != 10) {
    if (score > this.maxScore) throw "Maximum score is 10"
    if (this._isItEndOfGame()) throw "End of Game!"
    this.bowlScore.push(score)
    if (this.endOfGameCount === 21) {
    this.totalScore += score;
    }
    this._changeFirstBowl();
    this._incrementBowlCount();
    this._tenthFrame();
  } else if (this.isThisFirstBowl() && score == 10) {
    if (this._isItEndOfGame()) throw "End of Game!"
    this.bowlScore.push(score)
    this.bowlScore.push(0)
    this._incrementBowlCount();
    this._incrementBowlCount();
    this._incrementFrameCount();
    this._updateFrameScore();
    this._updateTotalScore(this.frameScore);
    this._spare();
    this._strike();
    this._tenthFrame();
  } else {
    if ((this.bowlScore[this.bowlCount - 1] + score) > this.maxScore) throw "Maximum total score is 10"
    if (this._isItEndOfGame()) throw "End of Game!"
    this.bowlScore.push(score)
    this._incrementBowlCount();
    this._incrementFrameCount();
    this._updateFrameScore();
    this._updateTotalScore(this.frameScore);
    this._changeFirstBowl();
    this._strike();
    this._spare();
    this._tenthFrame();
  }
  console.log(this.showTotalScore());
  console.log(this.showFrameScore());
  console.log(this.showBowlScore());
};

Bowling.prototype.showTotalScore = function () {
  return this.totalScore;
};

Bowling.prototype.isThisFirstBowl = function () {
  return this.isFirstBowl;
};

Bowling.prototype.showBowlScore = function (bowl) {
  return this.bowlScore[bowl - 1];
};

Bowling.prototype.showFrameScore = function (frame) {
  return this.frameScore[frame - 1];
};

Bowling.prototype._updateTotalScore = function (numbers) {
  this.totalScore = numbers.reduce(function(sum, framescore) { return sum + framescore; });
};

Bowling.prototype._changeFirstBowl = function () {
  this.isFirstBowl = !this.isFirstBowl;
};

Bowling.prototype._incrementBowlCount = function () {
  this.bowlCount++;
};

Bowling.prototype._incrementFrameCount = function () {
  this.frameCount++;
};

Bowling.prototype._updateFrameScore = function () {
  this.frameScore.push(this.bowlScore[this.bowlCount - 2] + this.bowlScore[this.bowlCount - 1]);
};

Bowling.prototype._showBowlCount = function () {
  return this.bowlCount;
};

Bowling.prototype._showFrameCount = function () {
  return this.frameCount;
};

Bowling.prototype._strike = function () {
  if (this.frameCount > 1 && this.frameCount < 11) {
    if (this.bowlScore[this.bowlCount - 4] === 10) {
      this.frameScore[this.frameCount - 2] += (this.frameScore[this.frameCount - 1]);
      this._updateTotalScore(this.frameScore);
    }
  }
  if (this.frameCount > 2 && this.frameCount < 12) {
    if (this.bowlScore[this.bowlCount - 6] === 10 && this.bowlScore[this.bowlCount - 4] === 10) {
      this.frameScore[this.frameCount - 3] += (this.bowlScore[this.bowlCount - 2]);
      this.totalScore += this.bowlScore[this.bowlCount - 2];
    }
  }
  if (this.frameCount > 10) {
    if (this.frameScore[9] != null) {
      this.frameScore[9] += this.bowlScore[this.bowlCount - 2]};
      this.totalScore -= 10;
  }
};

Bowling.prototype._spare = function () {
    if (this.frameCount > 1 && this.frameCount < 11) {
      if ((c) && this.bowlScore[this.bowlCount - 4] != 10) {
      this.frameScore[this.frameCount - 2] += (this.bowlScore[this.bowlCount - 2]);
      this.totalScore += this.bowlScore[this.bowlCount - 2];
      if (this.frameScore[9] != null) { this.frameScore[9] += this.bowlScore[this.bowlCount - 2]};
    }
  }
};

Bowling.prototype._tenthFrame = function () {
  if (this.frameCount === 10) {
    if (this.bowlScore[this.bowlCount - 2] === 10) {
      this.endOfGameCount = 24;
    }
    if ((this.bowlScore[this.bowlCount - 2] + this.bowlScore[this.bowlCount - 1] === 10) && this.bowlScore[this.bowlCount - 2] != 10) {
      this.endOfGameCount = 21;
    }
  }
};

Bowling.prototype._isItEndOfGame = function () {
  return this.bowlCount === this.endOfGameCount;
};
