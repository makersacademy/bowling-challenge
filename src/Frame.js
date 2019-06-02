/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
let Frame = function (rolls) {
  this.MAXIMUM_SCORE = 10;
  this.rolls = rolls;
};

Frame.prototype.total = function (nextFrame) {
  return this._rollScore() + this._bonus(nextFrame);
};

Frame.prototype._rollScore = function () {
  return (this.rolls[0] + this.rolls[1]);
};

Frame.prototype._bonus = function (nextFrame) {
  if (nextFrame === undefined) {
    return 0;
  }

  if (this._isSpare()) {
    return nextFrame._spareBonus();
  }

  return 0;
};

Frame.prototype._isSpare = function () {
  return this._rollScore() === this.MAXIMUM_SCORE;
};

Frame.prototype._spareBonus = function () {
  return this.rolls[0];
};
