'use strict';

function Frame (roll1, roll2){
  this.MAXIMUM_SCORE = 10;
  this._rollSetter(roll1, roll2)
};

Frame.prototype._firstRoll = function () {
  return this.rolls[0];
};

Frame.prototype.total = function (next_frame) {
  return this._frameScore() + this._bonus(next_frame)
};

Frame.prototype._bonus = function (next_frame) {
  if (next_frame === undefined) {
    return 0;
  } else {
    if (this._isSpare()){
      return next_frame._firstRoll()
    }
    if (this._isStrike()){
      return next_frame._frameScore()
    }
  }
};


Frame.prototype._frameScore = function () {
  return this.rolls.reduce(function(a,b) {
    return a + b
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
