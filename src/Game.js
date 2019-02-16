function Game() {
  this._totalPoints = 0;
}

Game.prototype.showTotalPoints = function () {
  return this._totalPoints;  
};
