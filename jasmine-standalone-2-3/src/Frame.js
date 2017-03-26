function Frame(rolls) {
  this.rolls = rolls;
  this.noOfPins = 10;
}

Frame.prototype.total = function (next_first, next_second) {
  if (next_first === undefined){
    return this._calculateFrame();
  } else {
    return this._calculateFrame() + this._calculateBonus(next_first,next_second);
  }
};

Frame.prototype._calculateFrame = function() {
  return this.rolls.reduce(function(sum,roll){
    return sum + roll;
  },0);
};

Frame.prototype._calculateBonus = function (next_first, next_second) {
  if (this._isStrike()) {
    if (next_first._isStrike() && next_second !== undefined) {
      return next_first.rolls[0] + next_second.rolls[0];
  }
      return next_first.rolls[0] + next_first.rolls[1];
  } else if (this._isSpare()) {
    return next_first.rolls[0];
  } else {
    return 0;
  }
};

Frame.prototype._isSpare = function() {
  return this.rolls[0] + this.rolls[1] === this.noOfPins
};

Frame.prototype._isStrike = function() {
  return this.rolls[0] === this.noOfPins
};
