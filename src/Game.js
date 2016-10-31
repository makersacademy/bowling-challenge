function Game() {
  this.completedFrames = [];
  this.score = 0;
  this.isOver = false;
  this.isGutterGame = false;
  this.rollOneScoreAdded = false;
}

Game.prototype.startNewFrame = function() {
  this.currentFrame = new Frame()
}

Game.prototype.bowl = function(pins) {
  if(this.rollOneScoreAdded === false) {
    this.checkForSpareBonus(pins);
    this.currentFrame.addRollOneScore(pins);
    this.rollOneScoreAdded = true;
  }
  else {
    this.currentFrame.addRollTwoScore(pins);
  }
}

Game.prototype.checkForSpareBonus = function(rollOneScore) {
  // if(this.completedFrames.slice(-1)[0].isSpare) {
  //   this.completedFrames.slice(-1)[0].score = this.completedFrames.slice(-1)[0].pendingScore + rollOneScore;
  //   this.score += this.completedFrames.slice(-1)[0].score;
  // }
}

Game.prototype.completeFrame = function() {
  this.score += this.currentFrame.score;
  this.completedFrames.push(this.currentFrame);
  if(this.completedFrames.length === 10) {
    this.completeGame();
  }
}

Game.prototype.completeGame = function() {
  this.isOver = true;
  this.checkAccolades();
}

Game.prototype.checkAccolades = function() {
  if(this.score === 0) {
    this.isGutterGame = true;
  }
}
