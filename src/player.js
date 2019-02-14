function Player(name) {
  this.name = name;
  this.remainingFrames = 12;
  this.frames = [];
  this.currentFrame = new Frame();
  this.totalScore = 0
}

Player.prototype.enterRoll = function(score) {
  this.currentFrame.enterRoll(score);
  this._refreshTotalScore();
  if (this.currentFrame.returnIsComplete()) {
    this._storeCurrentFrame();
    this._newFrame(score);
    this._reduceRemainingFrames();
  }
};

Player.prototype._newFrame = function(score) {
  frame = new Frame();
  this.currentFrame = frame;
};

Player.prototype._storeCurrentFrame = function() {
  this.frames.push(this.currentFrame);
};

Player.prototype._reduceRemainingFrames = function() {
  this.remainingFrames -= 1;
};

Player.prototype._refreshTotalScore = function() {
  this.totalScore = 0
  this.frames.forEach(frame => {
    this.totalScore += frame.score
  })
};
