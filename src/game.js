function Game() {
  this._score = 0
  this._rolls = []
};

Game.prototype.returnScore = function () {
  return this._score
};

Game.prototype.roll = function (pins) {
  this._rolls.push(pins)
};

Game.prototype.updateScore = function () {
  this._score = this._rolls.reduce(function (a, b) {
    return a + b
  });
};