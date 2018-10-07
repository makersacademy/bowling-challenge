function Game (){
  this.totalScore = 0;
  this._frameNumber = 1;
  this.doubleFirstScoreNextRound = false;
  this.doubleBothScoresNextRound = false;
  this._currentFrame = new Frame();
};

Game.prototype.rollBall = function(userInput) {
  this._isBonus()
  //easy enough to call to a method here that raises an error if game number is over 10
  //can refactor repeated line call to calculate
  if (this._currentFrame._rollsLeft === 0){
    this._total()
    this._newFrame()
    this._sendPointsToFrame(userInput)
    this._increaseFrameNumber();
  } else {
    this._sendPointsToFrame(userInput);
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

Game.prototype._sendPointsToFrame = function(userInput) {
  if (this.doubleBothScoresNextRound === true) {
    this._currentFrame._bonusCounter += 2
    this._currentFrame.calculate(userInput)
  } else {
    this._currentFrame.calculate(userInput)
  }
};

Game.prototype._isBonus = function() {
  if (this._currentFrame.isStrike === true) {
  this.doubleBothScoresNextRound = true
  }
}
