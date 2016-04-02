function Game(frame){
  this.totalScore = 0;
  this.scoreBoard = [];
  this.currentFrame = frame;
  this.frameCount = 1;
}

Game.prototype.updateScoreBoard = function(frame){
  if (frame.isComplete()) {
    this.scoreBoard.push(frame.balls());
    this.frameCount = this.scoreBoard.length+1;
  }
}
