function Game (){
  this.totalScore = 0;
  this._framesLeft = 10;
  this.doubleFirstRollNextRound = false;
  this.doubleBothRollsNextRound = false;
  this._currentFrame = new Frame();
};

Game.prototype.rollBall = function(userInput) {
  if (this._currentFrame._rollsLeft === 0){
    this._total()
    this._currentFrame = new Frame();
    this._currentFrame.calculate(userInput);
    this._decreaseFrames();
  } else {
    this._currentFrame.calculate(userInput);
  }
};

Game.prototype._decreaseFrames = function() {
  this._framesLeft -= 1
};

Game.prototype._total = function() {
  this.totalScore += this._currentFrame.frameScore
};
