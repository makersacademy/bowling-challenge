function Game() {
  this._currentScore = 0;
}

Game.prototype.addScore = function addScore( score ) {
  this._currentScore += score;
};

Game.prototype.currentScore = function currentScore() {
  return this._currentScore;
};
