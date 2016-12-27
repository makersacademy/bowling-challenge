function Frame(firstRoll, secondRoll) {
  this.MAXIMUM_PINS = 10;
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll;
  this._isStrike = false;
  this._isSpare = false;
}

Frame.prototype.isStrike = function() {
  if (this._firstRoll === this.MAXIMUM_PINS && this._secondRoll === 0) {
    this._isStrike = true;
  }
};

Frame.prototype.isSpare = function() {
  if ((this._firstRoll < 10) && (this._firstRoll + this._secondRoll) === this.MAXIMUM_PINS) {
    this._isSpare = true;
  }
};
