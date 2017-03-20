function Frame() {
  this._rolls = [];
}

Frame.prototype.roll = function(value) {
 this._rolls.push(value);
};

Frame.prototype.calculateFrameScore = function () {
  return this._rolls.reduce(function(score1, score2) {
    return score1 + score2;
  }, 0);
};

Frame.prototype.isStrike = function () {
  return this._rolls.length === 1 && this.calculateFrameScore() === 10;
};

Frame.prototype.isSpare = function () {
  return this._rolls.length === 2 && this.calculateFrameScore() === 10;
};

Frame.prototype.isComplete = function () {
  return this._rolls.length === 2 || this.isStrike();
};
