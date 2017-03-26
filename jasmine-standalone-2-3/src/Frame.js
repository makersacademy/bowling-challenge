function Frame(rolls) {
  this.rolls = rolls;
  this.noOfPins = 10;
}

Frame.prototype.total = function (next_first, next_second) {
  if (next_first === undefined){
    return this.framePoints();
  } else {
    return this.framePoints() + this.bonusPoints(next_first,next_second);
  }
};

Frame.prototype.framePoints = function() {
  return this.rolls.reduce(function(sum,roll){
    return sum + roll;
  },0);
};

Frame.prototype.bonusPoints = function (next_first, next_second) {
  if (this.isStrike()) {
    if (next_first.isStrike()) {
      return next_first.rolls[0] + next_second.rolls[0];
    }
      return next_first.rolls[0] + next_first.rolls[1];
  } else if (this.isSpare()) {
    return next_first.rolls[0];
  } else {
    return 0;
  }
};

Frame.prototype.isSpare = function() {
  return this.rolls[0] + this.rolls[1] === this.noOfPins
};

Frame.prototype.isStrike = function() {
  return this.rolls[0] === this.noOfPins
};
