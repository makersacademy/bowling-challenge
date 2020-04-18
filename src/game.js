Game = function() {
  this._frames = [new Frame()]
  this._score = 0;
  this._applyBonus = false;
}

Game.prototype.currentFrame = function() {
  return this._frames[this._frames.length -1];
}

Game.prototype.bowlBall = function(pins) {
  frame = this.currentFrame();
  frame.enterTurn(pins);
  this.endTurn();
}

Game.prototype.endTurn = function() {
  if(frame.complete()) {
    if (frame.strike()) {
      this._applyBonus = true;
    }
    this._score += frame.viewScore();
    this.addFrame()
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

Game.prototype.bonusScore = function() {
  return this._score;
}
