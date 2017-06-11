var Frame = function (firstRoll, secondRoll = 0) {
  this.rolls = [firstRoll,secondRoll];
};

Frame.prototype.sumOfFrame = function() {
  return this.rolls[0] + this.rolls[1];
};
