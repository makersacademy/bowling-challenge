function Game () {
  this._cumulativeScore = 0
  this._frame = new Frame()
}

Game.prototype.cumulativeScore = function() {
  return this._cumulativeScore
}

Game.prototype.knockDown = function(pins) {
  scoreForRoll = this._frame.score(pins)
  this._cumulativeScore += scoreForRoll
}
