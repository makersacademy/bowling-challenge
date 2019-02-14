function Player(name) {
  this.name = name;
  this.remainingFrames = 12;
  this.frames = [];
  this.currentFrame = new Frame();
}

Player.prototype.updateCurrentFrame = function() {
  if (this.currentFrame.returnIsComplete() === true) {
    this.remainingFrames -= 1;
  }
};

Player.prototype.enterRoll = function(score) {
  this.currentFrame.returnIsComplete()
    ? this.newFrame(score)
    : this.currentFrame.enterRoll(score);
};

Player.prototype.newFrame = function(score) {
  frame = new Frame();
  frame.enterRoll(score);
  this.frames.push(this.currentFrame);
  this.currentFrame = frame;
};
