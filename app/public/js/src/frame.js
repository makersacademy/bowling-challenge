var Frame = function(finalFrame) {
  this._rolls = [];
  this._bonus = null;
  this._finalFrame = finalFrame;
};

Frame.prototype.roll = function(value) {
  this._rolls.push(value);
};

Frame.prototype.internalScore = function() {
  return this._rolls.reduce(function(score, nextRoll) {
    return score + nextRoll;
  }, 0);
};

Frame.prototype.isStrike = function() {
  return this._rolls.length === 1 && this.internalScore() === 10;
};

Frame.prototype.isSpare = function() {
  return this._rolls.length === 2 && this.internalScore() === 10;
};

Frame.prototype.isFinished = function() {
  return this._rolls.length === 2 || this.isStrike();
};

Frame.prototype.bonus = function(bonusValue) {
  if (this.isStrike()) {
    this._bonus = bonusValue.reduce(function(sum, bonus) {
      return sum + bonus;
    }, 0);
  } else if (this.isSpare()) {
    this._bonus = bonusValue[0];
  }
};

Frame.prototype.finalScore = function() {
  return this.internalScore() + this._bonus;
};

Frame.prototype.isSpecial = function() {
  return (this.isStrike() || this.isSpare()) && this._bonus === null;
};

Frame.prototype.final = function() {
  return this._finalFrame === true;
};

Frame.prototype.message = function() {
  if (this.isFinished() === true) {
    return 'Your frame is finished, next frame'
  } else if (this.final() === true) {
    return 'Last frame, you have 3 rolls max'
  } else {
    return 'Keep on rolling'
  }
  return this.message;
};
