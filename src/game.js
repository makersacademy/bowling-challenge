Game = function() {
  this._frames = [new Frame()]
  this._currentFrame = 0
}

Game.prototype.getFrame = function() {
  return this._frames[this._currentFrame];
}