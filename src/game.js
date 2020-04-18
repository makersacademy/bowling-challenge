Game = function() {
  this._frames = [new Frame()]
  this._turnCount = 0;
  this._score = 0;
}

Game.prototype.currentFrame = function() {
  return this._frames[this._turnCount];
}

Game.prototype.bowlBall = function(pins) {
  frame = this.currentFrame();
  frame.enterTurn(pins);
  this.updateFrame();
}

Game.prototype.updateFrame = function() {
  if(frame.currentTurn() === 2) {
    this._score += frame.viewScore();
    this.addFrame()
    this._turnCount++
  }
}

Game.prototype.addFrame = function() {
  this._frames.push( new Frame() )
}

Game.prototype.getFrameScore = function() {
  frame = this.currentFrame();
  return frame.viewScore();
}

Game.prototype.getFrameCount = function() {
  return this._frames.length;
}

Game.prototype.getScore = function() {
  return this._score;
}
