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

Frame.prototype.isFull = function() {
  return (this.getFrame().length === 2);
};

Frame.prototype.isStrike = function() {
  return (this._frame[0] === 10);
};

Frame.prototype.isSpare = function() {
  if (!this.isStrike()) {
    return (this.sumRolls() === 10);
  }
};

Frame.prototype.isWrong = function(roll) {
  if (typeof this._frame[0] !== 'undefined') {
    if (this._frame[0] + roll > 10) {
      throw Error('Out of range: maximum roll total for a frame is 10');
    }
  } else {
    if (roll > 10) {
      throw Error('Out of range: maximum roll is 10');
    }
  }
};
