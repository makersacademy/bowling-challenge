var BowlingGame = function () {
  this.LOWESTSCORE = 0
  this.HIGHESTSCORE = 300
  this.MAXFRAMES = 10
  this.score = 0;
  this.noOfFrames = [];
}

BowlingGame.prototype.addFrame = function (frame) {
  if (this._addFrameLimit() === true) {
    return 'Game is over';
  } else {
    this._incrementNoOfFrames(frame);
    this._incrementScore();
  }
}

BowlingGame.prototype.outcome = function () {
  if (this._isLowest() === true) {
    return 'Gutter game! Too bad, try again next time!';
  } else if (this._isHighest() === true) {
    return 'Perfect game!';
  } else {
    return 'Your score is ' + this.score;
  }
}


BowlingGame.prototype._addFrameLimit = function () {
  return this.noOfFrames.length === this.MAXFRAMES;
}

BowlingGame.prototype._incrementNoOfFrames  = function (frame) {
  this.noOfFrames.push(frame);
}

BowlingGame.prototype._incrementScore = function () {
  this.score += this.noOfFrames[this.noOfFrames.length-1].rollScore;
}

BowlingGame.prototype._isLowest = function () {
  return this.score === this.LOWESTSCORE;
}

BowlingGame.prototype._isHighest = function () {
  return this.score === this.HIGHESTSCORE;
}
