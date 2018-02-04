const FRAME_LIMIT = 10;

function GameLogic (frameLogClass){
  this.frameLogClass = frameLogClass
  this.frameLog = null
}

GameLogic.prototype.isFrameLimit = function(){
  return this.frameLog.frameCount() === FRAME_LIMIT
}

GameLogic.prototype.newGame = function(){
  this.frameLog = this.frameLogClass.createFrameLog()
}

GameLogic.prototype.addRoll = function(rollScore){
  if(this.noFrameInProgress()) {
    this._startFrame(rollScore)
  } else {
    this._completeFrame(rollScore)
  }
}

GameLogic.prototype._startFrame = function(rollScore){
  if (this.frameLog.frameCount() === (FRAME_LIMIT + 1)) throw "No more rolls allowed"
  if(this.isFrameLimit() && !this.isCurrentFrameSpare() && !this.isCurrentFrameStrike()) throw "No more rolls allowed"
  this.frameLog.startFrame(rollScore)
}

GameLogic.prototype._completeFrame = function(rollScore){
  if (this.isCurrentFrameStrike() && !this.isFrameLimit()) return this._startFrame(rollScore)
  if(this.frameLog.frameCount() === 11) return this._startFrame(RollScore)
  this.frameLog.endFrame(rollScore)
}

GameLogic.prototype.isPreviousFrameStrike = function(){
  return this.frameLog.isPreviousFrameStrike()
}
GameLogic.prototype.isPreviousFrameSpare = function(){
  return this.frameLog.isPreviousFrameSpare()
}
GameLogic.prototype.isCurrentFrameSpare = function(){
  return this.frameLog.isCurrentFrameSpare()
}
GameLogic.prototype.isCurrentFrameStrike = function(){
  return this.frameLog.isCurrentFrameStrike()
}
GameLogic.prototype.noFrameInProgress = function() {
  return this.frameLog.currentFrameValue() === null
}
