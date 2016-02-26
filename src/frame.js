function Frame() {
  this._rolls = [];
  this.MAX_ROLLS = 2;
  this.bonusPoints = 0;
}

Frame.prototype.addRoll = function(pins_down) {
  if (this.isFrameCompleted() === false) {
    this._rolls.push(pins_down);
    this.bonusCheck();
  } else
    throw new Error('Max two rolls per turn or one per strike!')
};

Frame.prototype.checkRoll = function(pins_down) {
  return this._rolls;
}

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

Frame.prototype.bonusCheck = function() {
  if (this._rolls[0] === 10) {
    this.bonusPoints = 2;
  };
};
