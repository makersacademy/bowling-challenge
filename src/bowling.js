function Bowling() {
  this._frames = [];
  this._currentFrame = [];
}

Bowling.prototype.knockDown = function(knockedPins) {
  if (this.isCurrentFrameFinished()) {
    throw new Error('Current frame is finished')
  }
  if (this.getCurrentFrame() + knockedPins > 10) {
    throw new Error('Invalid number of pins')
  }
  this._currentFrame.push(knockedPins);
};

Bowling.prototype.nextFrame = function() {
  if (!this.isCurrentFrameFinished()) {
    throw new Error('Current frame is not finished')
  }
  this._frames.push(this._currentFrame);
  this._currentFrame = [];
}

Bowling.prototype.getCurrentFrame = function() {
  return this._currentFrame.reduce(function(memo, elem) {
    return memo + elem;
  }, 0);
};

Bowling.prototype.isCurrentFrameFinished = function() {
  return (this._currentFrame[0] === 10 || this._currentFrame.length === 2);
};
