function Game() {
  this._frames = [];
}

Game.prototype.addRoll = function(rollValue) {
  if (this._isFirstFrame() || this._lastFrameIsComplete()) {
    this._addNewFrame(rollValue);
  } else {
    this._lastFrame().addRoll(rollValue);
  }
};

Game.prototype._addNewFrame = function(rollValue) {
  if (this.numberOfFrames() === 9) {
    this._frames.push(new FrameTen(rollValue, this._lastFrame()));
  } else {
    this._frames.push(new Frame(rollValue, this._lastFrame()));
  }
};

Game.prototype.totalScore = function() {
  var scoreCalculator = new ScoreCalculator(this._frames);
  return scoreCalculator.totalScore();
};

Game.prototype.numberOfFrames = function() {
  return this._frames.length;
};

Game.prototype._isFirstFrame = function() {
  return this.numberOfFrames() === 0;
};

Game.prototype._lastFrame = function() {
  return this._frames[this.numberOfFrames() - 1];
};

Game.prototype._lastFrameIsComplete = function() {
  return !this._lastFrame().isOngoing();
};
