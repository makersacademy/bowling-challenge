Frame = function() {
  this.pinsRemaining = 10
  this.rollOneScore = 0
  this.rollTwoScore = 0
  this.rollOneDone = false
  this.rollTwoDone = false
  this.isStrike = false
  this.isHalfStrike = false
};

Frame.prototype.getRollOne = function(roll) {
  this.rollOneScore = this.getScore(roll);
  if(this.checkStrike()) this.isStrike = true;
  this.rollOneDone = true;
};

Frame.prototype.getRollTwo = function(roll){
  this.rollTwoScore = this.getScore(roll);
  if(this.checkStrike()) this.isHalfStrike = true;  
  this.rollTwoDone = true;
};

Frame.prototype.getScore = function(roll){  
  this.pinsRemaining -= roll;
  return roll
};

Frame.prototype.checkStrike = function(){
  return this.pinsRemaining === 0;
};

