function Game() {
  this.frames = []
  this.currentFrame = 0
}

Game.prototype.addFrame = function () {
  this.currentFrame += 1
  this.frames.push([this.currentFrame,[]])
};

Game.prototype.addBowl = function (score) {
  var frame = this.currentFrame - 1
  if (this.frames[frame][1].length == 2) {
    this.addFrame();
    this.addBowl(score);
  } else {
    this.frames[frame][1].push(score)
  }
};
