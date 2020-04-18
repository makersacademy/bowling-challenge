Game = function() {
  this._frames = [new Frame()]
  this._score = 0;
  this._applyBonus = false;
  this._bonusScore = 0;
}

Game.prototype.bowlBall = function(pins) {
  frame = this._currentFrame();
  frame.enterTurn(pins);
  this._endTurn();
}

Game.prototype.getFrameScore = function() {
  frame = this._currentFrame();
  return frame.viewScore();
}

Game.prototype.getFrameCount = function() {
  return this._frames.length;
}

Game.prototype.getScore = function() {
  return (this._score + this._bonusScore);
}

Game.prototype.getBonusScore = function() {
  return this._bonusScore;
}



Game.prototype._currentFrame = function() {
  return this._frames[this._frames.length -1];
}

Game.prototype._addFrame = function() {
  this._frames.push( new Frame() )
}

Game.prototype._bonusFrame = function() {
  if (frame.strike()) {
    this._applyBonus = true;
  } return false
}

Game.prototype._updateScore = function() {
  this._score += frame.viewScore();
  this._generateBonus();
}

Game.prototype._generateBonus = function() {
  if (this._applyBonus) {
    this._bonusScore = frame.viewScore();
  }
}

Game.prototype._endTurn = function() {
  if(frame.complete()) {
    this._bonusFrame()
    this._updateScore()
    this._addFrame()
  }
}