function FinalFrame() {
  this._totalPoints = 0;
  this._ballOne = null;
  this._ballTwo = null;
  this._bonus = null;
}

FinalFrame.prototype.showTotalPoints = function () {
  return this._totalPoints;
};

FinalFrame.prototype.showBallOne = function () {
  return this._ballOne;
};

FinalFrame.prototype.showBallTwo = function () {
  return this._ballTwo;
};

FinalFrame.prototype.showBonus = function () {
  return this._bonus;
};
