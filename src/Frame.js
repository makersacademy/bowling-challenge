function Frame() {
  this._frame = [];
}


Frame.prototype.getFrame = function() {
  return this._frame;
};

Frame.prototype.addRoll = function(roll) {
  this._frame.push(roll);
};

Frame.prototype.sumRolls = function() {
  return (this._frame[0] + this._frame[1]);
}

Frame.prototype.isNew = function() {
  return (this.getFrame().length === 1);
};

Frame.prototype.isComplete = function() {
  return (this.getFrame().length === 2);
};

Frame.prototype.isStrike = function() {
  return (this._frame[0] === 10);
};

Frame.prototype.isSpare = function() {
  if (!this._frame.isStrike()) {
    return (this._frame.sumRolls() === 10);
  }
};
