function Game(frame) {
  this._currentScore = 0;
  this._currentFrame = frame || new Frame();
  this._frameLog = [];
}

Game.prototype.logRoll = function(roll) {
  this._currentFrame.addRoll(roll);
  if (this._currentFrame.isComplete()) {
    this._logFrame();
  }
};

Game.prototype.getScore = function() {
  return this._currentScore;
}

Game.prototype.getFrame = function(frame) {
  return this._frameLog[frame - 1];
}

Game.prototype._logFrame = function() {
  var frame = this._currentFrame.getFrameData()
  this._frameLog.push(frame);
  this._currentScore += frame.total;
}
