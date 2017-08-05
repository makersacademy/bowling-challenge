function Frame(index) {
  this.frameIndex = index;
  this._roll1 = null;
  this._roll2 = null;
}

Frame.prototype.getScore = function () {
  return this._roll1 + this._roll2;
};

Frame.prototype.firstRoll = function(pins) {
  this._roll1 = pins;
};

Frame.prototype.secondRoll = function(pins) {
  this._roll2 = pins;
};

Frame.prototype.isStrike = function() {
  return this.getFirstRoll() === 10;
};

Frame.prototype.isSpare = function() {
  return this.getScore() === 10;
};

Frame.prototype.bonusType = function() {
  if (this.isStrike()) {
    return "strike";
  } else if (this.isSpare()) {
    return "spare";
  }
};

Frame.prototype.getFirstRoll = function() {
  return this._roll1;
};
