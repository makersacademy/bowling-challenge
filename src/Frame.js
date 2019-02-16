function Frame() {
  this._totalPoints = 0;
  this._ballOne = 0;
  this._ballTwo = 0;
}

Frame.prototype.showTotalPoints = function () {
  return this._totalPoints;
};

Frame.prototype.showBallOne = function () {
  return this._ballOne;
};

Frame.prototype.showBallTwo = function () {
  return this._ballTwo;
};
