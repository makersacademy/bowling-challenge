function Game() {
  this._score = 0
  this._frame = 0
}

Game.prototype.addFrame = function(framescore) {
  this._score += framescore
  this._frame ++
}

Game.prototype.totalScore = function() {
  return this._score
}

Game.prototype.frameNumber = function() {
  return this._frame
}