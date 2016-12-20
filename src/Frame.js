var Frame = function() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.frameBonus = 0;
  this._isTenthFrame = false;
};

Frame.prototype.firstRoll = function(score) {
  this.rollOne = score;
};

Frame.prototype.secondRoll = function(score) {
  if (this._isStrike()) {
    throw("First roll was a strike, cannot roll a second during this frame.");
  }
  else {
    this.rollTwo = score;
  }
};

Frame.prototype._tenthFrame = function() {
  this._isTenthFrame = true;
};

Frame.prototype._isStrike = function() {
  return this.rollOne === 10;
};

Frame.prototype._isSpare = function() {
  return (this._isStrike() === false && (this.rollOne + this.rollTwo === 10));
};
