function Frame() {
  this._roll = null;
  this._firstBall = 0;
  this._secondBall = 0;
}

Frame.prototype.calculateFrameTotal = function() {
  if(this._firstBall === 10) {
    return this._roll = "X";
  } else {
    return this._roll = this._firstBall + this._secondBall;
  }
};

Frame.prototype.currentRoll = function() {
  return this._roll;
};

Frame.prototype.bowlFirstBall = function(numberofBowledPins) {
  this._firstBall = numberofBowledPins;
  return numberofBowledPins;
};

Frame.prototype.bowlSecondBall = function(numberofBowledPins) {
  this._secondBall = numberofBowledPins;
  return numberofBowledPins;
};
