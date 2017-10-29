function Game() {
  this._score = 0;
};

Game.prototype.getScore = function () {
  return this._score;
}