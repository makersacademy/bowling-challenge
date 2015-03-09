Frame = function() {
  this.pinsRemaining = 10
  this.rollOneScore = 0
  this.rollTwoScore = 0
  this.isStrike = false
  this.isHalfStrike = false
};

Frame.prototype.getRollOne = function(roll) {
  this.rollOneScore = this.getScore(roll);
  if(this.checkStrike()) this.isStrike = true;
};

Frame.prototype.getRollTwo = function(roll){
  if(roll > this.pinsRemaining) return "error";
  this.rollTwoScore = this.getScore(roll);
  if(this.checkStrike()) this.isHalfStrike = true;  
};

Frame.prototype.getScore = function(roll){  
  this.pinsRemaining -= roll;
  return 10 - this.pinsRemaining
};

Frame.prototype.checkStrike = function(){
  return this.pinsRemaining === 0;
};