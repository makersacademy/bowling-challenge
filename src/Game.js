function Game() {
  this.allFrames = [];
  this.currentFrame = new Frame;
}

Game.prototype.play = function() {
  this.currentFrame.bowl();
}
