function Bowling() {
  this._frames = [];
  this._currentFrame = [];
}

Bowling.prototype.knockDown = function(knockedPins) {
  if (this.getCurrentFrame() + knockedPins > 10) {
    throw new Error('Invalid number of pins')
  }
  this._currentFrame.push(knockedPins);
};

Bowling.prototype.getCurrentFrame = function() {
  return this._currentFrame.reduce(function(memo, elem) {
    return memo + elem;
  }, 0);
};
