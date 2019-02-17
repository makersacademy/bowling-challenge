function Frame() {
  this._totalPoints = 0;
  this._ballOne = 0;
  this._ballTwo = 0;
}

Frame.prototype.showTotalPoints = function () {
  this.calculateTotalPoints();
  return this._totalPoints;
};

Frame.prototype.showBallOne = function () {
  return this._ballOne;
};

Frame.prototype.showBallTwo = function () {
  return this._ballTwo;
};

Frame.prototype.updateBallOne = function (value) {
  this._ballOne = value;
};

Frame.prototype.updateBallTwo = function (value) {
  if (this._ballOne + value > 10){
    throw new Error("There are not enough pins left standing! Check your input.");
}
  this._ballTwo = value;
};

Frame.prototype.calculateTotalPoints = function () {
  this._totalPoints += this._ballOne;
  this._totalPoints += this._ballTwo;
};
