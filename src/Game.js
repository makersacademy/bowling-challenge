function Game (){
  this.totalScore = 0;
  this._frameNumber = 1;
  this.doubleFirstRollNextRound = false;
  this.doubleBothRollsNextRound = false;
  this._currentFrame = new Frame();
};

Game.prototype.rollBall = function(userInput) {
  if (this._currentFrame._rollsLeft === 0){
    this._total()
    this._newFrame()
    this._currentFrame.calculate(userInput);
    this._increaseFrameNumber();
  } else {
    this._currentFrame.calculate(userInput);
  }
};

Game.prototype._increaseFrameNumber = function() {
  this._frameNumber += 1
};

Game.prototype._total = function() {
  this.totalScore += this._currentFrame.frameScore
};

Game.prototype._newFrame = function() {
  this._currentFrame = new Frame();
}
