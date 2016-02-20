function Game() {
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};
