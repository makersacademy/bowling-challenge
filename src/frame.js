function Frame(number) {
  this.frameNumber = number;
  this._roll1 = null;
  this._roll2 = null;
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

Frame.prototype.isStrike = function() {
  return this._roll1 === 10;
};

Frame.prototype.isSpare = function() {
  return this.getScore() === 10;
};
