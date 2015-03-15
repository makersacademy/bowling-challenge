FrameTen = function() {
  this.pinsRemaining = 10
  this.rollOneScore = 0
  this.rollTwoScore = 0
  this.rollThreeScore = 0
  this.rollOneDone = false
  this.rollTwoDone = false
  this.rollThreeDone = false
};

FrameTen.prototype.getRollOne = function(roll) {
  if(roll === 10) return this.rollOneScore = 10
  if(roll !== 10) return this.rollOneScore = this.getScore(roll)
};

FrameTen.prototype.getRollTwo = function(roll){

};

FrameTen.prototype.getRollThree = function(roll){

};

FrameTen.prototype.getScore = function(roll){  
  this.pinsRemaining -= roll;
  return roll
};

