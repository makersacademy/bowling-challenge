var Frame = function() {
  this._rolls = []
};

Frame.prototype.roll = function(value) {
  this._rolls.push(value);
};

Frame.prototype.score = function() {
  return this._rolls.reduce(function(score, nextRoll) {
    return score + nextRoll;
  }, 0);
};

Frame.prototype.isStrike = function() {
  return this._rolls.length === 1 && this.score() === 10;
};

Frame.prototype.isSpare = function() {
  return this._rolls.length === 2 && this.score() === 10;
};

Frame.prototype.isFinished = function() {
  return this._rolls.length === 2 || this.isStrike();
};
