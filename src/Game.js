function Game() {
  this.allFrames = [];
  this.currentFrame = new Frame;
}

Game.prototype.play = function() {
  this.currentFrame.bowl();
  if(this.currentFrame.frameComplete === true) {
    this.allFrames.push(this.currentFrame);
    this.frameReset();
  }
}

Game.prototype.frameReset = function() {
  this.currentFrame = new Frame;
}
