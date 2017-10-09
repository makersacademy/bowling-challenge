var Frame = function(frameNumber){
  this.frameNumber = frameNumber
  this.roundOne = null
  this.roundTwo = null
  this.scoreTotal = 0
  this.frameTenBonusRound = null
  this.frameStrike = null
  this.frameSpare = null
};

Frame.prototype.bonusRound = function(){
  this.bonus = 0
};
