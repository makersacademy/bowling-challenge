function Game(){
  this._frames = []
}

Game.prototype.roll = function(rolls) {
  frame = new Frame(rolls)
  this._frames.push(frame)
}