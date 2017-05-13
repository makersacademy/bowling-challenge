function Frame(finalFrame) {
  this._rolls = [];
  this._bonus = null;
  this._finalFrame = finalFrame;
};

Frame.prototype.roll = function(value) {
 this._rolls.push(value);
};

Frame.prototype.calculateFrameScore = function () {
  return this._rolls.reduce(function(score1, score2) {
    return score1 + score2;
  }, 0);
};

Frame.prototype.isStrike = function () {
  return this._rolls.length === 1 && this.calculateFrameScore() === 10;
};

Frame.prototype.isSpare = function () {
  return this._rolls.length === 2 && this.calculateFrameScore() === 10;
};

Frame.prototype.isComplete = function () {
  return this._rolls.length === 2 || this.isStrike();
};

Frame.prototype.bonus = function(value) {
  if (this.isStrike()) {
  this._bonus = value.reduce(function(score1, score2) {
    return score1 + score2;
  }, 0);
  } else if (this.isSpare()) {
  this._bonus = value[0];
  };
};

Frame.prototype.calculateFinalScore = function () {
  return this.calculateFrameScore() + this._bonus;
};

Frame.prototype.alert = function () {
  if (this.isComplete() === true) {
    return "This frame is finished.";
  };
};

Frame.prototype.final = function () {
  return this._finalFrame === (true);
};
