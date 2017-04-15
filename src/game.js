function Game() {
  this.frames = [];
  this.currentFrame = 0;
  this.MAX_FRAMES = 10;
}

Game.prototype.getCurrentFrame = function getCurrentFrame() {
  return this.frames[this.currentFrame];
};

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};
