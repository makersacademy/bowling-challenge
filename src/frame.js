function Frame() {
  this._roll1 = 0;
  this._roll2 = 0;
}

Frame.prototype.getScore = function () {
  this._score = this._roll1 + this._roll2;
  return this._score;
};

Frame.prototype.firstRoll = function(pins) {
  this._roll1 = pins;
};

Frame.prototype.secondRoll = function(pins) {
  this._roll2 = pins;
};
