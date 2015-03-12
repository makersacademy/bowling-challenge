Frame = function(n) {
  this.frameNumber = n
  this.pinsRemaining = 10
  this.rollOneScore = 0
  this.rollTwoScore = 0
  this.rollOneDone = false
  this.rollTwoDone = false
};

Frame.prototype.getRollOne = function(roll) {
  this.rollOneScore = this.getScore(roll);
  this.rollOneDone = true;
};

Frame.prototype.getRollTwo = function(roll){
  if(this.rollOneScore===10) this.rollTwoScore === 0
  if(this.rollOneScore!==10) this.rollTwoScore = this.getScore(roll);
  this.rollTwoDone = true;
};

Frame.prototype.getScore = function(roll){  
  this.pinsRemaining -= roll;
  return roll
};

