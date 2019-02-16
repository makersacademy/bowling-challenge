function Game() {
  this._totalPoints = 0;
  this._frameCount = 0;
}

Game.prototype.showTotalPoints = function () {
  return this._totalPoints;
};

Game.prototype.showFrameCount = function () {
  return this._frameCount;
};
