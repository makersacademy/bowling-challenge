function Game(){
  this._frameScore = 0;
}

Game.prototype.updateFrameScore = function(pins){
  this._frameScore += pins;
}
