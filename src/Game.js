function Game() {
  this.frames = [];
}

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};
