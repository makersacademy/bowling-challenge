var Frame = function(frameNumber){
  this.frameNumber = frameNumber
  this.roundOne = null
  this.roundTwo = null
  // this.score = null
  this.scoreTotal = null
}

Frame.prototype.bonusRound = function(){
  this.bonus = 0
}
