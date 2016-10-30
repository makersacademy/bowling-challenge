var Frame = function(rolls) {
  this.rolls = rolls;
};

Frame.prototype.totalPoints = function(frame, nextFrame) {
  return this._rollScore() + this._bonusScore(frame, nextFrame);
};

Frame.prototype._rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return (score + roll);
  });
};


Frame.prototype._bonusScore = function(frame, nextFrame) {
  if (undefined === frame) {
    return 0;
  }
  if (this._isStrike()) {
    return frame._strikeBonus(nextFrame);
  }
  if (this._isSpare()) {
    return frame._spareBonus();
  }
  return 0;
};
