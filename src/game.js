function Game(playerName, frameConstructor) {
  this.score = 0;
  this.frames = [];
  this.player = playerName;
  this.scoreMultipliers = [1, 1];
  this.frameConstructor = frameConstructor;
  this.frameNumber = 1;
}

Game.prototype.roll = function(pinsKnocked) {
  this._createOrContinueFrame();
  this._updateFrameNumber();
  this.frames[this.frameNumber - 1].roll(pinsKnocked);
  this._updateScoreMultipliers();
  this._updateScore();
  return this.score;
};

Game.prototype._createOrContinueFrame = function() {
  let activeFrame;
  let lastFrame = this.frames[this.frameNumber - 1];
  if (this._isStartOfFinalFrame()) {
    activeFrame = new this.frameConstructor(this.scoreMultipliers, true);
    this.frames.push(activeFrame);
  } else if (typeof lastFrame == "undefined" || lastFrame.isComplete()) {
    activeFrame = new this.frameConstructor(this.scoreMultipliers, false);
    this.frames.push(activeFrame);
  } else {
    activeFrame = lastFrame;
  }
  return activeFrame;
};

Game.prototype._updateFrameNumber = function() {
  this.frameNumber = this.frames.length;
};

Game.prototype._updateScoreMultipliers = function() {
  let lastFrame = this.frames[this.frameNumber - 1];
  if (lastFrame.isComplete()) {
    this.scoreMultipliers = lastFrame.scoreMultipliers;
  }
};

Game.prototype._updateScore = function() {
  let lastFrame = this.frames[this.frameNumber - 1];
  if (lastFrame.isComplete()) {
    this.score += lastFrame.score;
  }
};

Game.prototype._isStartOfFinalFrame = function() {
  let lastFrame = this.frames[this.frameNumber - 1];
  return this.frameNumber === 9 && lastFrame.isComplete();
};
