'use strict';

function Frame (roll1, roll2){
  this.MAXIMUM_SCORE = 10;
  this._rollSetter(roll1, roll2)
};

Frame.prototype._firstRoll = function () {
  return this.rolls[0];
};

Frame.prototype.total = function (next_frame, next_next_frame) {
  return this._frameScore() + this._bonus(next_frame, next_next_frame)
};

Frame.prototype._bonus = function(next_frame, next_next_frame) {
  if (undefined === next_frame) {
    return 0;
  }
  if (this._isStrike()) {
    if(next_frame._isSpare()) {
      return this.MAXIMUM_SCORE + next_next_frame._firstRoll();
    }
    else {
      return next_frame._strikeBonus(next_next_frame);
    }
  }
  if (this._isSpare()) {
    return next_frame._firstRoll();
  }

  return 0;
};

Frame.prototype._strikeBonus = function(next_next_frame) {
  if (this._isStrike() && next_next_frame !== undefined) {
    return this._frameScore() + next_next_frame._frameScore();
  }
  return this._firstRoll() + this.rolls[1];
};


Frame.prototype._frameScore = function () {
  return this.rolls.reduce(function(score,roll) {
    return score + roll
  });
};

Frame.prototype._isSpare = function () {
  if (this._isStrike() === false) {
    if(this._frameScore() === this.MAXIMUM_SCORE) {
      return true;
    }
  } else {
    return false;
  }
};

Frame.prototype._isStrike = function () {
  if(this.rolls.length === 1) {
    return true;
  }
  else {
    return false;
  }
};

Frame.prototype._rollSetter = function (roll1, roll2) {
  if (roll1===this.MAXIMUM_SCORE) {
    this.rolls = [roll1]
  } else {
    this.rolls = [roll1, roll2]
  }
};
