Game = function() {
  this._frames = [new Frame()]
  this._turnCount = 0
}

Game.prototype.currentFrame = function() {
  return this._frames[this._turnCount];
}

Game.prototype.bowlBall = function(pins) {
  frame = this.currentFrame();
  frame.enterTurn(pins);
}

Game.prototype.getFrameScore = function() {
  frame = this.currentFrame();
  return frame.viewScore();
}

Game.prototype.getFrameCount = function() {
  return this._turnCount;
}