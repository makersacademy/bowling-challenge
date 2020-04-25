/* eslint-disable no-undef */

Game = function() {
  this._frames = [new Frame()]
  this._score = 0;
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

Game.prototype.getFirstRoll = function() {
  frame = this._currentFrame();
  return frame.firstTurn();
}

Game.prototype.getSecondRoll = function() {
  if(this.getFrameCount > 2){
    return this._lastFrame().secondTurn()
  }
}

Game.prototype.getFrameCount = function() {
  return this._frames.length;
}

Game.prototype.getTotalScore = function() {
  return (this._score + this._bonusScore);
}

Game.prototype.getScore = function() {
  return (this._score);
}

Game.prototype.getBonusScore = function() {
  return this._bonusScore;
}

Game.prototype.complete = function() {
  if(this.getFrameCount() > 10) {
    return true
  }
}


Game.prototype._currentFrame = function() {
  return this._frames[this._frames.length -1];
}
Game.prototype._lastFrame = function() {
  return this._frames[this._frames.length -2];
}

Game.prototype._applySpare = function(pins) {
  last = this._lastFrame()
  if (last.spare()) {
    this._bonusScore += frame.firstTurn();
  } 
  
}
Game.prototype._applyStrike = function() {
  last = this._lastFrame()
  if (last.strike()) {
    this._bonusScore += frame.viewScore();
  } 
}

Game.prototype._updateScore = function() {
  this._score += frame.viewScore();
  if(this.getFrameCount() > 1) {
    this._applyStrike();
    this._applySpare();
  }
}
Game.prototype._addFrame = function() {
  if(!this.complete()){
    this._frames.push( new Frame() )
  }
}

Game.prototype._endTurn = function() {
  if(frame.complete()) {
    this.secondTurn = frame._secondTurn;
    this.firstTurn = undefined;
    this.frameScore = this.getFrameScore()
    this._updateScore()
    this._addFrame()
  } else {
    this.firstTurn = frame._firstTurn;
  }
}

