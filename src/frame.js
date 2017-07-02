var Frame = function (firstRoll, secondRoll = 0) {
  this.rolls = [firstRoll,secondRoll];
};

Frame.prototype.bonusRoll = function(thirdRoll) {
  this.rolls.push(thirdRoll);
};
