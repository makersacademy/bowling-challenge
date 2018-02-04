function GameLogic (frameLogClass){
  this.framelog = frameLogClass.createGameLog
}

GameLogic.prototype.isTenthFrame = function(){
  return this.framelog.frameCount() === 10
}
