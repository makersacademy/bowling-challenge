function FinalFrame() {
  this._totalPoints = 0;
  this._ballOne = null;
  this._ballTwo = null;
  this._bonus = null;
}

FinalFrame.prototype.showTotalPoints = function () {
  this.calculateTotalPoints();
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

FinalFrame.prototype.updateBallOne = function (value) {
  this._ballOne = value;
};

FinalFrame.prototype.updateBallTwo = function (value) {
  if ( (this._ballOne != 10) && (this._ballOne + value > 10) ) {
    throw new Error("There are not enough pins left standing! Check your input.");
  }
  this._ballTwo = value;
};

FinalFrame.prototype.updateBonus = function (value) {
    this._bonus = value;
};

FinalFrame.prototype.calculateTotalPoints = function () {
  this._totalPoints += this._ballOne;
  this._totalPoints += this._ballTwo;
  this._totalPoints += this._bonus;
};
