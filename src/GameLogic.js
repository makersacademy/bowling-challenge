const FRAME_LIMIT = 10;

function GameLogic (frameLogClass){
  this.frameLogClass = frameLogClass
  this.currentFrameLog = null
}

GameLogic.prototype.isFrameLimit = function(){
  return this.currentFrameLog.frameCount() === FRAME_LIMIT
}

GameLogic.prototype.newGame = function(){
  this.currentFrameLog = this.frameLogClass.createFrameLog()
}

GameLogic.prototype.addNextFrameScoreFirstRoll = function(RollScore){
  if (this.currentFrameLog.frameCount() === (FRAME_LIMIT + 1)) throw "No more rolls allowed"
  if(this.isFrameLimit() && !this.isCurrentFrameSpare() && !this.isCurrentFrameStrike()) throw "No more rolls allowed"
  this.currentFrameLog.startFrame(RollScore)
}

GameLogic.prototype.FrameScoreSecondRoll = function(RollScore){
  if (this.currentFrameLog.frameCount() === (FRAME_LIMIT + 1)) throw "No more rolls allowed"
  if (this.isCurrentFrameStrike() && !this.isFrameLimit()) return this.addNextFrameScoreFirstRoll(RollScore)
  this.currentFrameLog.endFrame(RollScore)
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
