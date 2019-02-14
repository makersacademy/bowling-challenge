function Game() {
  this.frames = []
  this.currentFrame = 0
}

Game.prototype.addFrame = function () {
  this.currentFrame += 1
  this.frames.push([this.currentFrame,[null,null]])
};
