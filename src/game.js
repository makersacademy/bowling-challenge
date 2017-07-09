function Game() {
  this.frames = [];
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
}
