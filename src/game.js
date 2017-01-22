// calculates the score of the entire game
function Game() {
  this.MAXFRAMES = 10;
  this.framesComplete = 0;
  this.scoreBoard = [];
  this.runningScoreWithoutBonus = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function(frame) {
  this.isGameOver();
  this.calculateScore(frame);
  this.scoreBoard.splice(this.framesComplete, 0, frame);
  this.runningScoreWithoutBonus.splice(this.framesComplete, 0, frame.totalPinsDown);
}

Game.prototype.addBonusFrame = function(bonusFrame) {
  this.isGameOver();
  this.calculateScoreBonusFrame(bonusFrame);
  this.scoreBoard.splice(this.framesComplete, 0, bonusFrame);
  this.runningScoreWithoutBonus.splice(this.framesComplete, 0,[bonusFrame.firstRollPins, bonusFrame.secondRollPins, bonusFrame.bonusRollPins]);
}


Game.prototype.isGameOver = function() {
  if(this.framesComplete >= this.MAXFRAMES) {
    throw `${this.MAXFRAMES} frames maximum.`
  } else {
    this.framesComplete += 1;
  }
}

Game.prototype.calculateScore = function(frame) {
  this.specials();
  if(this.wasLastFrameASpare){
    this.totalScore += (frame.totalPinsDown + frame.firstRollPins);
  } else if(this.wereLastTwoFramesBothStrikes){
    this.totalScore += (frame.totalPinsDown * 3)
  } else if (this.wasLastFrameAStrike){
    this.totalScore += (frame.totalPinsDown * 2)
  } else {
    this.totalScore += frame.totalPinsDown;
  }
  this.checkGutterGame();
}

Game.prototype.calculateScoreBonusFrame = function(bonusFrame){
  this.specials();
  if(this.wasLastFrameASpare){
    this.totalScore += (bonusFrame.totalPinsDown + bonusFrame.firstRollPins);
  } else if(this.wereLastTwoFramesBothStrikes){
    this.totalScore += (bonusFrame.totalPinsDown + bonusFrame.totalPinsDown)
  } else if (this.wasLastFrameAStrike){
  } else {
    this.totalScore += bonusFrame.totalPinsDown;
  }
  this.checkPerfectGame();
}

Game.prototype.specials = function() {
  this.checkFirstFrame();
  this.checkSecondFrame();
  if(this.isFirstFrame === false){
    if(this.scoreBoard[this.framesComplete - 2].spare === true) {
      this.wasLastFrameASpare = true
    } else {
      this.wasLastFrameASpare = false
    }
    if(this.isSecondFrame === false) {
      if(this.scoreBoard[this.framesComplete - 2].strike === true && this.scoreBoard[this.framesComplete -3].strike === true){
        this.wereLastTwoFramesBothStrikes = true;
      } else {
        this.wereLastTwoFramesBothStrikes = false
      }
    }
    if(this.scoreBoard[this.framesComplete - 2].strike === true) {
      this.wasLastFrameAStrike = true
    } else {
      this.wasLastFrameAStrike = false
    }
  }
}

Game.prototype.checkFirstFrame = function(){
  if(this.framesComplete === 1) {
    this.isFirstFrame = true;
  } else {
    this.isFirstFrame = false;
  }
}

Game.prototype.checkSecondFrame = function(){
  if(this.framesComplete === 2) {
    this.isSecondFrame = true;
  } else {
    this.isSecondFrame = false;
  }
}

Game.prototype.checkGutterGame = function(){
  if((this.framesComplete === this.MAXFRAMES) && this.totalScore === 0){
    this.isGutterGame = true;
  }
}

Game.prototype.checkPerfectGame = function(){
  if((this.framesComplete === this.MAXFRAMES) && this.totalScore === 300){
    this.isPerfectGame = true;
  }
}
