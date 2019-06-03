function Game (frame = new Frame()){
  this.totalScore = 0;
  this._frameNumber = 1;
  this.double1 = false;
  this.double2 = false;
  this._currentFrame = frame
  this.message = ""
};


  Game.prototype.rollBall = function(userInput) {
    userInput = Number(userInput)
    //can refactor repeated line call to calculate
    if (this._currentFrame._rollsLeft === 0){

      this._isBonus()
      this._total()

      this._increaseFrameNumber();
      this._ifTenth()

      this._newFrame()
      this.sendBonusPoints(userInput)
      this._currentFrame.calculate(userInput)
    } else {

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

  Game.prototype.sendBonusPoints = function(userInput) {

    if (this.double2 === true) {
      this._currentFrame._bonusCounter += 2

    } else if (this.double1 === true) {
      this._currentFrame._bonusCounter += 1
    
  }
  };

  Game.prototype._isBonus = function() { //I think this function is necessary because we will lose the information soon when we refresh frame.

    if (this._currentFrame.isStrike === true) {
      this.double2 = true

    } else if (this._currentFrame.isSpare === true){
      this.double1 = true

    } else {
      this.double2 = false
      this.double1= false
    }

  Game.prototype._ifTenth = function() {

    if ((this._frameNumber === 11) && (this._currentFrame.isSpare === true)){ //add else if for is spare
      this.totalScore += userInput
      this.message = "Game over! Your total Game Score is " + this.totalScore.toString() + " out of 300 possible points. Please refresh the page to play again!"

    } else if ((this._frameNumber === 11) && (this._currentFrame.isStrike === true)){
      this.totalScore += userInput
      this.message = "Game over! Your total Game Score is " + this.totalScore.toString() + " out of 300 possible points. Please refresh the page to play again!"

    } else if (this._frameNumber === 11) {
      this.message = "Game over! Your total Game Score is " + this.totalScore.toString() + " out of 300 possible points. Please refresh the page to play again!"

    }

  }


};
