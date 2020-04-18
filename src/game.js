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
  console.log(this._frames);
}

Game.prototype.getFrameScore = function() {
  frame = this.currentFrame();
  return frame.calculateScore();
}