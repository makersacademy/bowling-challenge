function Scorecard(){
  this.totalScore = 0;
  this.rolls = [];
};

Scorecard.prototype.oneFrame = function(roll1, roll2) {
  this.totalScore += roll1 + roll2;
  (this.rolls).push([roll1, roll2]);
};


