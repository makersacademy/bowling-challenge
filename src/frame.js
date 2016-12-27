function Frame(firstRoll, secondRoll) {
  this.MAXIMUM_PINS = 10;
  this._firstRoll = firstRoll;
  this._secondRoll = secondRoll;
  this._isStrike = false;
  this._isSpare = false;
}
