// calculates score for a frame
function Frame(number) {
  this.frameNumber = number;
  this._isFinished = false;
  this._totalPinsDown = 0;
  this._rollCount = 0;
}

Frame.prototype.roll = function(pinsDown) {
  if (this._rollCount < 2) {
    this._totalPinsDown += pinsDown;
    this._rollCount += 1;
  }
  if (this._rollCount === 2) {
    this._isFinished = true;
  }
};

Frame.prototype.calculateScore = function() {
  return this._totalPinsDown;
};

Frame.prototype.isFinished = function() {
  return this._isFinished;
};
