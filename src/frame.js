function Frame() {
  this._rolls = [];
  this.MAX_ROLLS = 2;
}

Frame.prototype.addRoll = function(pins_down) {
  if (this.isFrameCompleted() === false) {
    this._rolls.push(pins_down)
  } else
    throw new Error('Max two rolls per turn!')
};

Frame.prototype.isFrameCompleted = function() {
  return this._rolls.length >= this.MAX_ROLLS
};
