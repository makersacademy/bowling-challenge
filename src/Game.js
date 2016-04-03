function Game(){
  this._frames = []
  this.score = 0
  this.currentFrame
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame)
}
