function Frame() {
  this._rolls = [];
  this.MAX_ROLLS = 2;
}

Frame.prototype.addRoll = function(pins_down) {
  if (this.isFrameCompleted() === false) {
    this._rolls.push(pins_down)
  } else
    throw new Error('Max two rolls per turn or one per strike!')
};

Frame.prototype.isFrameCompleted = function() {
  if (this._rolls[1] !== null && this.isStrike()) { return true; }
    return this._rolls.length >= this.MAX_ROLLS;
  };

Frame.prototype.isStrike = function () {
  return this._rolls[0] === 10;
};

Frame.prototype.isSpare = function() {
  return (this._rolls[0] + this._rolls[1]) === 10;
};
