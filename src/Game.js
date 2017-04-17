function Game() {
  this.allFrames = [];
  this.currentFrame = new Frame;
  this.runningTotal = 0;
}

Game.prototype.play = function() {
  this.currentFrame.bowl();
  if(this.currentFrame.frameComplete === true) {
    this.allFrames.push(this.currentFrame);
    this.runningTotal += this.currentFrame.frameTotalScore;
    this.frameReset();
  }
}

Game.prototype.frameReset = function() {
  this.currentFrame = new Frame;
}
