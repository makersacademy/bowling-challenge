FrameTen = function() {
  this.pinsRemaining = 10
  this.rollOneScore = 0
  this.rollTwoScore = 0
  this.rollThreeScore = 0
  this.rollOneDone = false
  this.rollTwoDone = false
  this.rollThreeDone = false
};

FrameTen.prototype.getRollOne = function(roll, player) {
  if(roll === 10) {
    this.rollOneScore = 10
    player.newFrame()
  }else if(roll !== 10) {
    this.rollOneScore = this.getScore(roll)   
  }
  this.rollOneDone = true;
};

FrameTen.prototype.getRollTwo = function(roll, player){
  if(roll === 10) {
    this.rollTwoScore = 10
    player.newFrame()
  }else if(roll !== 10) {
    this.rollTwoScore = this.getScore(roll)   
  }; 
  if(this.rollOneScore + this.rollTwoScore === 10){
    player.newFrame;
  }
  this.rollTwoDone = true;
};

FrameTen.prototype.isRollThree = function(){
  if(this.rollOneScore === 10 || this.rollOneScore + this.rollTwoScore === 10){
    return true
  }else{
    return false
  }
};

FrameTen.prototype.getRollThree = function(roll){
  if(this.isRollThree()){
    this.rollThreeScore = roll
  }else{
    this.rollThreeScore = 0;
  }  
  this.rollThreeDone = true
};

FrameTen.prototype.getScore = function(roll){  
  this.pinsRemaining -= roll;
  return roll
};

