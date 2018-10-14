function Game (frame = new Frame()){
  this.totalScore = 0;
  this._frameNumber = 1;
  this.doubleFirstScoreNextRound = false;
  this.doubleBothScoresNextRound = false;
  this._currentFrame = frame
};


Game.prototype.rollBall = function(userInput) {
  userInput = Number(userInput) //(how to refactor?)
   // I THINK THIS NEEDS TO BE CALLED SOMEWHERE ELSE. AND SOMETHING NEEDS TO SET IT BACK AGAIN

  //easy enough to call to a method here that raises an error if game number is over 10
  //can refactor repeated line call to calculate
  if (this._currentFrame._rollsLeft === 0){
    this._isBonus()
    this._total()
    this._newFrame()
    this._sendBonusPoints(userInput) //poss needs to be put somewhere else
    this._increaseFrameNumber();
    this._currentFrame.calculate(userInput)
  } else {
    //this._sendBonusPoints(userInput);
    this._currentFrame.calculate(userInput)
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

Game.prototype._sendBonusPoints = function(userInput) { //could refactor into two method
  if (this.doubleBothScoresNextRound === true) {
    this._currentFrame._bonusCounter += 2
  } else if (this.doubleFirstScoreNextRound === true) {
    this._currentFrame._bonusCounter += 1
}
};

Game.prototype._isBonus = function() {
  if (this._currentFrame.isStrike === true) {
    this.doubleBothScoresNextRound = true
  } else if (this._currentFrame.isSpare === true){
    this.doubleFirstScoreNextRound = true
  } else {
    this.doubleBothScoresNextRound = false
    this.doubleFirstScoreNextRound = false
  }


};
