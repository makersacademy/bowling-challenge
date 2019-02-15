function Game() {
  this.DEFAULT_FRAMES = [[], [], [], [], [], [], [], [], [], []];
  this.frames = this.DEFAULT_FRAMES;
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.lastTwoBowls = [0, 0];
  this.total = 0;
}

Game.prototype._currentFrameIndex = function() {
  return this.currentFrame - 1;
};

Game.prototype.addBowl = function(score) {
  this.frames[this._currentFrameIndex()].push(score);
  this._updateTurn();
  this._setLastTwoBowls(score);
};

Game.prototype._setLastTwoBowls = function(score) {
  this.lastTwoBowls.shift();
  this.lastTwoBowls.push(score);
};

Game.prototype._updateTurn = function() {
  if (this.currentBowl == 1) {
    this.currentBowl++;
  } else {
    this.currentFrame++;
    this.currentBowl = 1;
    this.total += this.lastFrameScore();
  }
};

Game.prototype.lastFrameScore = function() {
  var lastFrame = this.frames[this._currentFrameIndex() - 1];
  if (lastFrame.length == 2) {
    return lastFrame.reduce((a, b) => a + b);
  }
};
