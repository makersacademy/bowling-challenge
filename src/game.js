Game = function() {
  this._frames = [new Frame()]
  this._currentFrame = 0
}

Game.prototype.getFrame = function() {
  return this._frames[this._currentFrame];
}

// Game.prototype.getFrameScore = function() {
//   frame = this.getFrame();
//   return frame.calculateScore();
// }