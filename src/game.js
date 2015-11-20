function Game() {
  this.frames = [];
  this.gameRolls = [];
}

Game.prototype.roll = function(roll) {
  this.currentFrame().addRoll(roll);
  this.gameRolls.push(roll);
}

Game.prototype.score = function() {
  return this.rollsTotal();
}

// PRIVATE METHODS
Game.prototype.currentFrame = function() {
  if(this.isLastFrameFinished()) {
    this.addFrame();
  }
  return this.lastFrame();
}

Game.prototype.addFrame = function() {
  this.frames.push(new Frame());
}

Game.prototype.lastFrame = function() {
  if(this.frames.length === 0) {
    this.addFrame();
  }
  return this.frames[this.frames.length - 1];
}

Game.prototype.isLastFrameFinished = function() {
  var lastFrame = this.lastFrame();
  return lastFrame.isFinished();
}

Game.prototype.rollsTotal = function() {
  return this.gameRolls.reduce(function(a, b) { return a + b; }, 0);
}
