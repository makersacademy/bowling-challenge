function Game() {
  this.frameNumber = 1;
  this.totalScore = 0;
}

Game.prototype.getFrameNumber = function(){
  return this.frameNumber
};

Game.prototype.getTotalScore = function(){
  return this.totalScore
}
