function BowlingGame() {
  this._frameNumber = 1
}

BowlingGame.prototype.roundComplete = function() {
  this._frameNumber += 1
}
