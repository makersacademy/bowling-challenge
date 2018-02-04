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
