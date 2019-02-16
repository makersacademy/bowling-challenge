function Game() {
  this._totalPoints = 0;
  this._frameCount = 0;
  this._ballNumber = 1;
}

Game.prototype.showTotalPoints = function () {
  return this._totalPoints;
};

Game.prototype.showFrameCount = function () {
  return this._frameCount;
};

Game.prototype.showBallNumber = function () {
  return this._ballNumber;
};
