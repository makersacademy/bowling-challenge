function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1
  this.frames.push(this.currentFrame)
  this.score = 0;
};

Game.prototype.bowl = function(pins, bowls = 1) {
  for(var i = 0; i < bowls; i++) {
    this.score += pins;
  };
};
