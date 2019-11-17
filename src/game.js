function Game() {
  this.frames = [];
};

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
}

Game.prototype.calcScore = function() {
  return this.frames.reduce((a, b) => a + b);
}
