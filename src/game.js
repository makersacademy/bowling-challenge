function Game(playerName, frameConstructor) {
  this.score = 0;
  this.frames = [];
  this.player = playerName;
  this.multipliers = [1, 1];
  this.frameConstructor = frameConstructor;
  this.frameNumber = 1;
}

Game.prototype.roll = function(pinsKnocked) {
  this._createOrContinueFrame();
  this._updateFrameNumber();
  this.frames[this.frameNumber - 1].roll(pinsKnocked);
  this._updateMultipliers();
  this._updateScore();
  return this.score;
};

Game.prototype._createOrContinueFrame = function() {
  let activeFrame;
  let lastFrame = this.frames[this.frameNumber - 1];
  if (this._isStartOfFinalFrame()) {
    activeFrame = new this.frameConstructor(this.multipliers, true);
    this.frames.push(activeFrame);
  } else if (typeof lastFrame == "undefined" || lastFrame.isComplete()) {
    activeFrame = new this.frameConstructor(this.multipliers, false);
    this.frames.push(activeFrame);
  } else {
    activeFrame = lastFrame;
  }
  return activeFrame;
};

Game.prototype._updateFrameNumber = function() {
  this.frameNumber = this.frames.length;
};

Game.prototype._updateMultipliers = function() {
  let lastFrame = this.frames[this.frameNumber - 1];
  if (lastFrame.isComplete()) {
    this.multipliers = lastFrame.multipliers;
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
  if (this.frameNumber === 9 && lastFrame.isComplete()) {
    return true;
  } else {
    return false;
  }
};
