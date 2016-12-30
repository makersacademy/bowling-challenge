// calculates the score of the entire game
function Game() {
  this.MAXFRAMES = 10;
  this.framesComplete = 0;
  this.scoreBoard = [];
  this.runningScoreWithoutBonus = [];
  this.totalScore = 0;
  this.wasLastFrameASpare = false;
}

Game.prototype.addFrame = function(frame) {
  this.isGameOver();
  this.scoreBoard.splice(this.framesComplete, 0, frame);
  this.runningScoreWithoutBonus.splice(this.framesComplete, 0, frame.totalPinsDown);
}

Game.prototype.isGameOver = function() {
  if(this.framesComplete >= this.MAXFRAMES) {
    throw `${this.MAXFRAMES} frames maximum.`
  } else {
    this.framesComplete += 1;
  }
}
