Game = function() {
  this._frames = [new Frame()]
  this._score = 0;
  this._applyStrikeBonus = false;
  this._applySpareBonus = false;
  this._bonusScore = 0;
}

Game.prototype.bowlBall = function(pins) {
  frame = this._currentFrame();
  frame.enterTurn(pins);
  if (this._applySpareBonus) {
    this._bonusScore = pins;
    this._applySpareBonus = false
  }
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


Game.prototype._generateBonus = function() {
  if (this._applyStrikeBonus) {
    this._bonusScore = frame.viewScore();
  } 
}

Game.prototype._addStrike = function() {
  this._applyStrikeBonus = true;
}

Game.prototype._addSpare = function() {
  this._applySpareBonus = true;
}

Game.prototype._updateScore = function() {
  this._score += frame.viewScore();
  this._generateBonus();
}

Game.prototype._addFrame = function() {
  this._frames.push( new Frame() )
}


Game.prototype._endTurn = function() {
  if(frame.complete()) {
    if (frame.strike()) {
      this._addStrike();
    } else if (frame.spare()) {
      this._addSpare();
    }
    this._updateScore()
    this._addFrame()
  } 
}
