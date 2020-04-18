Game = function() {
  this._frames = [new Frame()]
  this._turnCount = 0
}

Game.prototype.getFrame = function() {
  return this._frames[this._turnCount];
}

Game.prototype.bowlBall = function(pins) {
  
}
// Game.prototype.getFrameScore = function() {
//   frame = this.getFrame();
//   return frame.calculateScore();
// }