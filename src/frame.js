function Frame(firstRoll, secondRoll) {
  this.MAXIMUM_PINS = 10;
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll;
  this._isStrike = false;
  this._isSpare = false;
}

Frame.prototype.isStrike = function() {
  if (this._firstRoll === this.MAXIMUM_PINS) {
    this._isStrike = true;
  }
};
