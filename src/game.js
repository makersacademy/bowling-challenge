function Game() {
  this._score = 0
};

Game.prototype.returnScore = function () {
  return this._score
}

Game.prototype.roll = function (pins) {
  this._score += pins
}