// calculates score for a frame
function Frame(number) {
  this.frameNumber = number;
  this._totalPinsDown = 0;
  this._rollCount = 0;
}

Frame.prototype.roll = function(pinsDown) {
  if (!this.isFinished()) {
    this._totalPinsDown += pinsDown;
    this._rollCount += 1;
  }
};

Frame.prototype.calculateScore = function() {
  return this._totalPinsDown;
};

Frame.prototype.isFinished = function() {
  if (this._rollCount === 2) {
    return true;
  } else if (this.isAStrike()) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isAStrike = function() {
  if (this._totalPinsDown === 10 && this._rollCount === 1) {
    return true;
  } else {
    return false;
  }
};
