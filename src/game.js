Game = function() {
  this._frames = [new Frame()]
}

Game.prototype.currentFrame = function() {
  return this._frames[0];
}