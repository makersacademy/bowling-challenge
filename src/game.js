// calculates the score of the entire game
function Scoring() {
  this.MAXFRAMES = 10;
  this.framesComplete = 0;
  this.scoreBoard = [];
  this.runningScoreWithoutBonus = [];
  this.totalScore = 0;
  this.isFirstFrame = true;
  this.wasLastFrameASpare = false;
  this.wasLastFrameAStrike = false;
  this.wereLastTwoFramesBothStrikes = false;
  this.isGutterGame = false;
  this.isPerfectGame = false;
}

Scoring.prototype.addFrame = function(frame) {
  this.isGameOver();
  this.calculateScore(frame);
  this.scoreBoard.splice(this.framesComplete, 0, frame);
  this.runningScoreWithoutBonus.splice(this.framesComplete, 0, frame.totalPinsDown);
}

Scoring.prototype.addBonusFrame = function(bonusFrame) {
  this.isGameOver();
  this.calculateScoreBonusFrame(bonusFrame);
  this.scoreBoard.splice(this.framesComplete, 0, bonusFrame);
  this.runningScoreWithoutBonus.splice(this.framesComplete, 0,[bonusFrame.firstRollPins, bonusFrame.secondRollPins, bonusFrame.bonusRollPins]);
}


Scoring.prototype.isGameOver = function() {
  if(this.framesComplete >= this.MAXFRAMES) {
    throw `${this.MAXFRAMES} frames maximum.`
  } else {
    this.framesComplete += 1;
  }
}

Scoring.prototype.calculateScore = function(frame) {
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

Scoring.prototype.calculateScoreBonusFrame = function(bonusFrame){
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

Scoring.prototype.specials = function() {
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

Scoring.prototype.checkFirstFrame = function(){
  if(this.framesComplete === 1) {
    this.isFirstFrame = true;
  } else {
    this.isFirstFrame = false;
  }
}

Scoring.prototype.checkSecondFrame = function(){
  if(this.framesComplete === 2) {
    this.isSecondFrame = true;
  } else {
    this.isSecondFrame = false;
  }
}

Scoring.prototype.checkGutterGame = function(){
  if((this.framesComplete === this.MAXFRAMES) && this.totalScore === 0){
    this.isGutterGame = true;
  }
}

Scoring.prototype.checkPerfectGame = function(){
  if((this.framesComplete === this.MAXFRAMES) && this.totalScore === 300){
    this.isPerfectGame = true;
  }
}
