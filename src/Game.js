var Game = function() {
  this.score = 0;
  this.currentFrame = [];
  this.completedFrames = [];
};

Game.prototype.roll = function(pinsKnockedDown) {
  this.newFrame(pinsKnockedDown);
  this.score += pinsKnockedDown;
};

Game.prototype.newFrame = function(pinsKnockedDown) {
  if (this.currentFrame.length == 0) {
    this.currentFrame[0] = pinsKnockedDown;
  }
  else {
    this.currentFrame[1] = pinsKnockedDown;
  };
};
