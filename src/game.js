function Game(){
  this._score = 0;
  this._frames = [];
}

Game.prototype.addFrames = function(frame){
  for(var f = 0; f < 10; f++) {
    this._frames.push(frame);
  }
}
