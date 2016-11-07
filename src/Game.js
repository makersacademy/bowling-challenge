function Game() {
  this.completedFrames = [];
  this.score = 0;
  this.isOver = false;
  this.isGutterGame = false;
  this.isFirstRoll = true;
  this.frameNumber = 1;
  this.currentFrame = new Frame();
}

Game.prototype.bowl = function(pins) {
  this._checkForDodgyInputs(pins);
  if(this.isFirstRoll) {
    this._processFirstRoll(pins);
  }
  else {
    this._processSecondRoll(pins);
  }
}

Game.prototype._startNewFrame = function() {

}

Game.prototype._processFirstRoll = function(pins) {
  this.currentFrame.addRollOneScore(pins);
  this.isFirstRoll = false;
  this._addBonusIfPreviousFrameWasSpare(pins);
  this._completeFrameIfStrike();
}

Game.prototype._processSecondRoll = function(pins) {
  this.currentFrame.addRollTwoScore(pins);
  this._addBonusifPreviousFrameWasStrike();
  this._completeFrame();
}

Game.prototype._completeFrame = function() {
  this.score += this.currentFrame.score;
  this.completedFrames.push(this.currentFrame);
  this.isFirstRoll = true;
  this.frameNumber += 1
  this.currentFrame = new Frame();
  if(this.completedFrames.length === 10) {
    this._completeGame();
  }
}

Game.prototype._addBonusIfPreviousFrameWasSpare = function(pins) {
  if(this.completedFrames.length > 0) {
    if(this.completedFrames.slice(-1)[0].isSpare) {
      this.completedFrames.slice(-1)[0].bonusScore += pins;
      this.completedFrames.slice(-1)[0].score = this.completedFrames.slice(-1)[0].pendingScore + this.completedFrames.slice(-1)[0].bonusScore;
      this.score += this.completedFrames.slice(-1)[0].score;
    }
  }
}

Game.prototype._completeFrameIfStrike = function() {
  this._addBonusForSequentialStrikes();
  if(this.currentFrame.isStrike) {
    this._completeFrame();
  }
}

//unless the second roll is a spare, in which case - add the bonus but don't change actual score for the frame or game
Game.prototype._addBonusifPreviousFrameWasStrike = function() {
  if(this.completedFrames.length > 0) {
    if(this.completedFrames.slice(-1)[0].isStrike) {
      this.completedFrames.slice(-1)[0].bonusScore += this.currentFrame.score;
      this.completedFrames.slice(-1)[0].score = this.completedFrames.slice(-1)[0].pendingScore + this.completedFrames.slice(-1)[0].bonusScore
      this.score += this.completedFrames.slice(-1)[0].score;
    }
  }
}

Game.prototype._addBonusForSequentialStrikes = function() {
  if(this.completedFrames.length > 0) {
    if(this.completedFrames.slice(-1)[0].isStrike) {
      this.completedFrames.slice(-1)[0].bonusScore = this.currentFrame.pendingScore;
    }
    if(this.completedFrames.slice(-2)[0].isStrike) {
      this.completedFrames.slice(-2)[0].score = this.completedFrames.slice(-2)[0].pendingScore + this.completedFrames.slice(-2)[0].bonusScore + this.currentFrame.pendingScore;;
    }
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

Game.prototype._checkForDodgyInputs = function(pins) {
  if(isNaN(pins)) throw "Cannot read this input. Expected a number from 0 to 10.";
  if(pins > 10) throw "Cannot read this input. Expected a number from 0 to 10.";
  if(pins < 0) throw "Cannot read this input. Expected a number from 0 to 10.";
  if(!this.isFirstRoll && pins > this.currentFrame.pinsRemaining) {
    throw "Cannot bowl more pins than are available.";
  }
}
