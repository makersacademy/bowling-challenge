var Frame = function() {
  this._rolls = [];
  this._score = 0;
};

Frame.prototype.pinsHit = function(number) {
  this._rolls.push(number);
};

Frame.prototype.score = function() {
  this._calculateScore();
  return this._score;
};

Frame.prototype.rollOne = function() {
  return this._rolls[0];
};

Frame.prototype.rollTwo = function() {
  return this._rolls[1];
};

Frame.prototype.isComplete = function() {
  if (this.isStrike() || this._rolls.length === 2) {
    return true;
  };
  return false;
};

Frame.prototype.isStrike = function() {
  if (this._rolls[0] === 10) {
    return true;
  };
  return false;
};

Frame.prototype.isSpare = function() {
  if (this.score() === 10 && this._rolls.length === 2) {
    return true;
  };
  return false;
}

Frame.prototype._calculateScore = function() {
  this._score = this._rolls.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
};
