function Frame() {
  this._roll = null;
  this._firstBall = 0;
  this._secondBall = 0;
  this._isComplete = false;
}

Frame.prototype.calculateFrameTotal = function() {
  if(this._isStrike()) {
    return this._roll = "X";
  } else {
    return this._roll = this._firstBall + this._secondBall;
  }
};

Frame.prototype.currentRoll = function() {
  return this._roll;
};

Frame.prototype.isComplete = function() {
  return this._isComplete;
};

Frame.prototype.bowlFirstBall = function(numberofBowledPins) {
  if(numberofBowledPins > 10) {
    throw new Error("Attempted to knock over more than 10 pins.");
  }
  this._firstBall = numberofBowledPins;
  if(this._isStrike()) {
    this._isComplete = true;
    this.calculateFrameTotal();
    return numberofBowledPins;
  } else {
    return numberofBowledPins;
  }
};

Frame.prototype.bowlSecondBall = function(numberofBowledPins) {
  if(this._firstBall + numberofBowledPins > 10) {
    throw new Error("Attempted to knock over more than 10 pins.");
  }
  this._secondBall = numberofBowledPins;
  this._isComplete = true;
  this.calculateFrameTotal();
  return numberofBowledPins;
};

Frame.prototype._isStrike = function() {
  return (this._firstBall === 10) ? true : false
}
