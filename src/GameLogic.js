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
  if(this.isTenthFrame() && !this.isCurrentFrameSpare() && !this.isCurrentFrameStrike()) throw "No more rolls allowed"
  this.currentFrameLog.startFrame(firstRollScore)
}

GameLogic.prototype.FrameScoreSecondRoll = function(secondRollScore){
  this.currentFrameLog.endFrame(secondRollScore)
}

GameLogic.prototype.isPreviousFrameStrike = function(){
  return this.currentFrameLog.isPreviousFrameStrike()
}
GameLogic.prototype.isPreviousFrameSpare = function(){
  return this.currentFrameLog.isPreviousFrameSpare()
}

GameLogic.prototype.isCurrentFrameSpare = function(){
  return this.currentFrameLog.isCurrentFrameSpare()
}
GameLogic.prototype.isCurrentFrameStrike = function(){
  return this.currentFrameLog.isCurrentFrameStrike()
}
