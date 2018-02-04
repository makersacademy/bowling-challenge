function GameLogic (frameLogClass){
  this.frameLogClass = frameLogClass
  this.currentFrameLog = null
}

GameLogic.prototype.isTenthFrame = function(){
  return this.currentFrameLog.frameCount() === 10
}

GameLogic.prototype.newGame = function(){
  this.currentFrameLog = this.frameLogClass.createFrameLog()
}

GameLogic.prototype.addNextFrameScoreFirstRoll = function(firstRollScore){
  this.currentFrameLog.startFrame(firstRollScore)
}

GameLogic.prototype.FrameScoreSecondRoll = function(secondRollScore){
  this.currentFrameLog.endFrame(secondRollScore)
}

GameLogic.prototype.isPreviousFrameStike = function(){
  return this.currentFrameLog.isPreviousFrameStike()
}
GameLogic.prototype.isPreviousFrameSpare = function(){
  return this.currentFrameLog.isPreviousFrameSpare()
}
