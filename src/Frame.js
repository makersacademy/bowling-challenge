function Frame(rolls) {
  this.MAXIMUM_SCORE = 10;
  this.rolls = rolls;
}

Frame.prototype.total = function (next_frame) {
  score = this._rollScore() + this._bonus(next_frame);
  return score;
};

Frame.prototype._rollScore = function () {
  return (this.rolls[0] + this.rolls[1]);
};

Frame.prototype._bonus = function (next_frame) {
  if (next_frame === undefined) {
    return 0;
  };

  if (this._isSpare()) {
    return next_frame._spareBonus();
  };
};

Frame.prototype._isSpare = function () {
  return this._rollScore() === this.MAXIMUM_SCORE;
};

Frame.prototype._spareBonus = function () {
  return this.rolls[0];
};
