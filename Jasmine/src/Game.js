// calculates score of all entire game
function Game() {
  this.frames = [];
  this.currentFrameIndex = 0
  for (i = 0; i <= 9; i++) {
    this.frames.push(new Frame(i));
  }
};

Game.prototype.currentFrame = function() {
  return this.frames[this.currentFrameIndex];
};

Game.prototype.advanceFrame = function() {
  this.currentFrameIndex += 1;
};

Game.prototype.score = function() {
  return 0;
};
