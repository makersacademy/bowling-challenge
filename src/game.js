function Game() {
  this.frames = []
}

Game.prototype.currentFrameIndex = function () {
  return this.frames.length - 1
}

Game.prototype.addFrame = function () {
  this.frames.push([[]])
};

Game.prototype.addBowl = function (score) {
  var frame = this.currentFrameIndex()
  if (this.frames[frame][0].length == 2) {
    this.addFrame();
    this.addBowl(score);
  } else {
    this.frames[frame][0].push(score)
  }
};

Game.prototype.gameOver = function () {
  var frame = this.currentFrameIndex()
  if (frame == 9 && this.frames[frame][0].length == 2) {
    return true;
  } else {
    return false;
  }
};
