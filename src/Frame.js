function Frame() {
  this._roll = 0;
  this._firstRoll = 0;
  this._secondRoll = 0;
}

Frame.prototype.rollBall = function(numberOfPins) {
  if (this.isFirstRoll) {
    this.setFirstRoll(numberOfPins);
    this.nextRoll();
  }
};

Frame.prototype.setFirstRoll = function(numberOfPins) {
  this._firstRoll += numberOfPins;
};

Frame.prototype.getFirstRoll = function() {
  return this._firstRoll;
};

Frame.prototype.isFirstRoll = function() {
  return this._roll === 0;
}

Frame.prototype.nextRoll = function() {
  this._roll += 1;
}
