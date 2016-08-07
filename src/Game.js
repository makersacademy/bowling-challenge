function Game() {
  this.totalScore = 0;
}

Game.prototype.getFrameNumber = function(){
  return this.currentFrame.frameNumber;
};

Game.prototype.getTotalScore = function(){
  return this.totalScore;
};

Game.prototype.play = function(){
  this.currentFrame = new Frame(1);
};

Game.prototype.getFrameScore = function(frameNumber){
  return this.currentFrame
}
