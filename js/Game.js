function Game() {
  this.frames = []
}

Game.prototype.playFrame = function () {
  var currentFrame = new Frame();
  this.frames.push(currentFrame);
};
