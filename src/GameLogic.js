
function GameLogic (frameLogClass = FrameLog){
  this.frameLogClass = frameLogClass
  this.frameLog = null
}

GameLogic.prototype.newGame = function(){
  this.frameLog = this.frameLogClass.createFrameLog()
}

GameLogic.prototype.addRoll = function(rollScore){
  this.frameLog.addRoll(rollScore)
}

GameLogic.prototype.isPreviousFrameStrike = function(){
  return this.frameLog.isPreviousFrameStrike()
}
GameLogic.prototype.isPreviousFrameSpare = function(){
  return this.frameLog.isPreviousFrameSpare()
}
