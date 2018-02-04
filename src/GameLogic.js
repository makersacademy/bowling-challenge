function GameLogic (frameLogClass){
  this.framelog = frameLogClass
}

GameLogic.prototype.isTenthFrame = function(){
  return this.framelog.frameCount() === 10
}
