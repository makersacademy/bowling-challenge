function Frame(ball) {
  this.firstRoll = ball;
  this.secondRoll = null;
  this.pendingBonusPoints = null;
  this.score = 0;
}

Frame.prototype.setSecondRoll = function (ball) {
  this.secondRoll = ball;
  return this.secondRoll;
};

Frame.prototype.readyToCalculateScore = function () {
  return ((!this.isCompleted() || this.anyBonusPoints()) ? false:true)
};

Frame.prototype.anyBonusPoints = function () {
  if (this._isStrike()) {
    this.pendingBonusPoints = 'strike';
  } else if (this._isSpare()) {
    this.pendingBonusPoints = 'spare';
  }
  return this.pendingBonusPoints;
};

Frame.prototype.isCompleted = function () {
  return ((this._isStrike()) || (this.secondRoll !== null));
};

Frame.prototype.getScore = function () {
  return (this.score = this.firstRoll + this.secondRoll);
}

Frame.prototype._isStrike = function () {
  return (this.firstRoll === 10);
};

Frame.prototype._isSpare = function () {
  return (this.getScore() === 10)
};
