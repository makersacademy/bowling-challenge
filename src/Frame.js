/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
let Frame = function (rolls) {
  this.MAXIMUM_SCORE = 10;
  this.rolls = rolls;
};

Frame.prototype.total = function (nextFrame, thirdFrame) {
  return this._rollScore() + this._bonus(nextFrame, thirdFrame);
};

Frame.prototype._rollScore = function () {
  return this.rolls.reduce(function (score, roll) {
    return score + roll;
  }, 0);
};

Frame.prototype._bonus = function (nextFrame, thirdFrame) {
  if (nextFrame === undefined) {
    return 0;
  }

  if (this._isStrike()) {
    return nextFrame._strikeBonus(thirdFrame);
  }

  if (this._isSpare()) {
    return nextFrame._spareBonus();
  }

  return 0;
};

Frame.prototype._isStrike = function () {
  return this._firstRoll() === this.MAXIMUM_SCORE;
};

Frame.prototype._isSpare = function () {
  return this._rollScore() === this.MAXIMUM_SCORE;
};

Frame.prototype._spareBonus = function () {
  return this._firstRoll();
};

Frame.prototype._strikeBonus = function (thirdFrame) {
  if (this._isStrike() && thirdFrame !== undefined) {
    return this._rollScore() + thirdFrame._firstRoll();
  }

  return this._firstRoll() + this.rolls[1];
};

Frame.prototype._firstRoll = function () {
  return this.rolls[0];
};
