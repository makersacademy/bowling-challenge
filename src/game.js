function Game() {
  this.frames = [[]]
}

Game.prototype.currentFrameIndex = function () {
  return this.frames.length - 1
}

Game.prototype.addFrame = function () {
  this.frames.push([])
};

Game.prototype.addBowl = function (score) {
  if (this._isFrameComplete()) {
    this.addFrame();
    this.addBowl(score);
  } else {
    this.frames[this.currentFrameIndex()].push(score)
  }
};

Game.prototype.gameOver = function () {
  if (this.currentFrameIndex() == 9 && this._isFrameComplete()) {
    return true;
  } else {
    return false;
  }
};

Game.prototype._isFrameComplete = function () {
  return this.frames[this.currentFrameIndex()].length == 2;
};
