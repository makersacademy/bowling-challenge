function Frame() {
  this._roll = null;
  this._firstBall = null;
  this._secondBall = null;
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

Frame.prototype.firstBall = function() {
  return this._firstBall;
}

Frame.prototype.secondBall = function() {
  return this._secondBall;
}

Frame.prototype.bowlFirstBall = function(bowledPins) {
  this._checkIfFirstBallAlreadyBowled();
  this._checkLessThan10Pins(bowledPins);
  this._firstBall = bowledPins;
  if(this._isStrike()) {
    this._isComplete = true;
    this.calculateFrameTotal();
    return bowledPins;
  } else {
    return bowledPins;
  }
};

Frame.prototype.bowlSecondBall = function(bowledPins) {
  this._checkifSecondBallAlreadyBowled();
  this._checkLessThan10Pins(bowledPins);
  this._secondBall = bowledPins;
  this._isComplete = true;
  this.calculateFrameTotal();
  return bowledPins;
};

Frame.prototype.isComplete = function() {
  return this._isComplete;
};

Frame.prototype._isStrike = function() {
  return (this._firstBall === 10) ? true : false
};

Frame.prototype._checkIfFirstBallAlreadyBowled = function() {
  if(this._firstBall) {
    throw new Error("You have already bowled your first ball for this frame.")
  }
};

Frame.prototype._checkifSecondBallAlreadyBowled = function() {
  if(this._secondBall) {
    throw new Error("You have already bowled your second ball for this frame.")
  }
};

Frame.prototype._checkLessThan10Pins = function(bowledPins) {
  if(this._firstBall + bowledPins > 10) {
    throw new Error("Attempted to knock over more than 10 pins.");
  }
};
