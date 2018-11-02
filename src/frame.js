var Frame = function(){
  this.currentScore = 0;
};

Frame.prototype.getCurrentScore = function () {
  return this.currentScore
};

Frame.prototype.calculateScore = function (roll1, roll2) {
  this.currentScore = roll1 + roll2;
};
