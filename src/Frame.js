var Frame = function(rolls) {
  this.MAX_SCORE = 10;
  this.rolls = rolls;
};

Frame.prototype.total = function(nextFrame, afterNextFrame) {
  return this._rollScore() + this._bonus(nextFrame, afterNextFrame);
};

Frame.prototype._rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll;
  });
};

Frame.prototype._bonus = function(nextFrame, afterNextFrame) {
  if (undefined === nextFrame) {
    return 0;
  }
  if (this._isStrike()) {
    return nextFrame._strikeBonus(afterNextFrame);
  }
  if (this._isSpare()) {
    return nextFrame._spareBonus();
  }
  return 0;
};

Frame.prototype._isSpare = function() {
  return this._rollScore() == this.MAX_SCORE;
};

Frame.prototype._isStrike = function() {
  return this._firstRoll() == this.MAX_SCORE;
};

Frame.prototype._spareBonus = function() {
  return this._firstRoll();
};

Frame.prototype._strikeBonus = function(nextFrame) {
  if (this._isStrike() && nextFrame !== undefined) {
    return this._rollScore() + nextFrame._firstRoll();
  }

  return this._firstRoll() + this.rolls[1];
};

Frame.prototype._firstRoll = function() {
  return this.rolls[0];
};
