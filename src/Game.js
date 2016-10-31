function Game() {
  this.completedFrames = [];
  this.score = 0;
  this.isOver = false;
  this.isGutterGame = false;
  this.isFirstRoll = true;
}

Game.prototype.bowl = function(pins) {
  if(this.isFirstRoll === true) {
    this._processFirstRoll(pins);
  }
  else {
    this._processSecondRoll(pins);
  }
}

// Game.prototype.checkForSpareBonus = function(rollOneScore) {
//   // if(this.completedFrames.slice(-1)[0].isSpare) {
//   //   this.completedFrames.slice(-1)[0].score = this.completedFrames.slice(-1)[0].pendingScore + rollOneScore;
//   //   this.score += this.completedFrames.slice(-1)[0].score;
//   // }
// }

Game.prototype._processFirstRoll = function(pins) {
  this._startNewFrame();
  // this.checkForSpareBonus(pins);
  this.currentFrame.addRollOneScore(pins);
  this.isFirstRoll = false;
}

Game.prototype._processSecondRoll = function(pins) {
  this.currentFrame.addRollTwoScore(pins);
  this.isFirstRoll = true;
  this._completeFrame();
}

Game.prototype._startNewFrame = function() {
  this.currentFrame = new Frame()
}

Game.prototype._completeFrame = function() {
  this.score += this.currentFrame.score;
  this.completedFrames.push(this.currentFrame);
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
