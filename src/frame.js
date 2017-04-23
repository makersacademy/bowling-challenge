'use strict';

function Frame(rolls) {
  this.rolls = rolls;
  this.MAXIMUM_SCORE = 10;
}

Frame.prototype.total = function(next_frame, next_to_next_frame) {
  return this._rollScore() + this._bonus(next_frame, next_to_next_frame);
}

Frame.prototype._rollScore = function() {
  return this.rolls.reduce(function(score, roll) {
    return score + roll;
  });
}

Frame.prototype._bonus = function(next_frame, next_to_next_frame) {
  if ( undefined === next_frame ) {
    return 0;
  }
  else if ( this._isStrike() ) {
    return next_frame._strikeBonus(next_to_next_frame);
  }
  else if ( this._isSpare() ) {
    return next_frame._spareBonus();
  }
  else {
    return 0;
  }
}

Frame.prototype._isSpare = function() {
  return this._rollScore() == this.MAXIMUM_SCORE;
}

Frame.prototype._isStrike = function() {
  return this._firstRoll() == this.MAXIMUM_SCORE;
}

Frame.prototype._spareBonus = function() {
  return this._firstRoll();
}

Frame.prototype._strikeBonus = function(next_frame) {
  if (this._isStrike() && next_frame !== undefined) {
    return this._rollScore() + next_frame._firstRoll();
  }

  return this._firstRoll() + this.rolls[1];
}

Frame.prototype._firstRoll = function() {
  return this.rolls[0];
}

module.exports = Frame;
