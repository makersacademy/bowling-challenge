function Game() {
  this.completedFrames = [];
  this.score = 0;
  this.isOver = false;
  this.isGutterGame = false;
  this.isFirstRoll = true;
  this.frameNumber = 1;
}

Game.prototype.bowl = function(pins) {
  if(this.isFirstRoll === true) {
    this._processFirstRoll(pins);
  }
  else {
    this._processSecondRoll(pins);
  }
}

Game.prototype._processFirstRoll = function(pins) {
  this.currentFrame = new Frame()
  if(this.completedFrames.length > 0) {
    this._checkForSpareBonus(pins);
  }
  this.currentFrame.addRollOneScore(pins);
  this._completeFrameIfStrikeOrSetFirstRollToFalse();
}

Game.prototype._processSecondRoll = function(pins) {
  this.currentFrame.addRollTwoScore(pins);
  if(this.completedFrames.length > 0) {
    this._checkForStrikeBonus();
  }
  this.isFirstRoll = true;
  this._completeFrame();
}

Game.prototype._checkForSpareBonus = function(pins) {
  this._getPreviousFrame();
  if(this.previousFrame.isSpare) {
    this.previousFrame.score = this.previousFrame.pendingScore + pins;
    this.score += this.previousFrame.score;
  }
}

Game.prototype._completeFrameIfStrikeOrSetFirstRollToFalse = function() {
  if(this.currentFrame.isComplete) {
    this._completeFrame();
  }
  else {
    this.isFirstRoll = false;
  }
}

Game.prototype._checkForStrikeBonus = function() {
  this._getPreviousFrame();
  if(this.previousFrame.isStrike) {
    this.previousFrame.score = this.previousFrame.pendingScore + this.currentFrame.score;
    this.score += this.previousFrame.score;
  }
}

Game.prototype._getPreviousFrame = function() {
  this.previousFrame = this.completedFrames.slice(-1)[0];
}

Game.prototype._completeFrame = function() {
  this.score += this.currentFrame.score;
  this.completedFrames.push(this.currentFrame);
  this.frameNumber += 1;
  if(this.completedFrames.length === 10) {
    this._completeGame();
  }
}

Game.prototype._completeGame = function() {
  this.isOver = true;
  this._checkAccolades();
}

Game.prototype._checkAccolades = function() {
  if(this.score === 0) {
    this.isGutterGame = true;
  }
}
