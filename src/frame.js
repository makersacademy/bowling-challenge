var Frame = function(roll1, roll2){
  this.currentScore = roll1 + roll2;
};

Frame.prototype.getCurrentScore = function () {
  return this.currentScore
};
