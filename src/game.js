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
  for (var i = 0; i < this._rolls.length; i++) {
    if (this.isSpare(i)) {
      this._score += (this._rolls[i] + this._rolls[i+1])
    } else {
      this._score += this._rolls[i]
    }
  }
};

Game.prototype.isSpare = function (i) {
  return (i % 2 !== 0 && this._rolls[i] + this._rolls[i-1] === 10)
};