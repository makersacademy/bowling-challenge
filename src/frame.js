'use strict;'

function Frame() {
  this._rolls = [];
  this.MAX_ROLLS = 2;
}

Frame.prototype.addRoll = function(pins_down) {
  if (this.isFrameCompleted()) {
    throw new Error('Max two rolls per turn or one per strike!');
  } else {
    this._rolls.push(pins_down);
  }
};

Frame.prototype.checkRoll = function(pins_down) {
  return this._rolls;
}

Frame.prototype.isSpare = function() {
  return this._rolls[0] + this._rolls[1] === 10;
};

Frame.prototype.isStrike = function () {
  return this._rolls[0] === 10;
};

Frame.prototype.isFrameCompleted = function() {
  if (this._rolls[0] && this.isStrike()) { return true; }
    return this._rolls.length >= this.MAX_ROLLS;
}
