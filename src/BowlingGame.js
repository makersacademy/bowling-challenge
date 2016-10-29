var BowlingGame = function () {
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

BowlingGame.prototype._addFrameLimit = function () {
  return this.noOfFrames.length === 10;
}

BowlingGame.prototype._incrementNoOfFrames  = function (frame) {
  this.noOfFrames.push(frame);
}

BowlingGame.prototype._incrementScore = function () {
  this.score += this.noOfFrames[this.noOfFrames.length-1].rollScore;
}
