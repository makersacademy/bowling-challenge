function Game() {
  this.frames = [];
}

Game.prototype.setFrames = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(i));
  }
};
