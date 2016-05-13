function Game () {
  this._score = 0
}

Game.prototype.currentScore = function() {
  return this._score
}
