var Frame = function(frameNumber){
  this.frameNumber = frameNumber
  this.roundOne = null
  this.roundTwo = null
  this.scoreTotal = null
  this.frameTenBonusRound = null
};

Frame.prototype.bonusRound = function(){
  this.bonus = 0
};
