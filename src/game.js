// calculates the score of the entire game
function Game() {
  this.MAXFRAMES = 10;
  this.framesComplete = 0;
  this.scoreBoard = [];
  this.runningScoreWithoutBonus = [];
  this.totalScore = 0;
  this.isFirstFrame = true;
  this.wasLastFrameASpare = false;
  this.wasLastFrameAStrike = false;
}

Game.prototype.addFrame = function(frame) {
  this.isGameOver();
  this.calculateScore(frame);
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

Game.prototype.calculateScore = function(frame) {
  this.specials();
  if(this.wasLastFrameASpare){
    this.totalScore += (frame.totalPinsDown + frame.firstRollPins);
  } else if(this.wasLastFrameAStrike){
    this.totalScore += (frame.totalPinsDown * 2)
  } else {
    this.totalScore += frame.totalPinsDown;
  }
}

Game.prototype.specials = function() {
  this.checkFirstFrame();
  if(this.isFirstFrame === false){
    if(this.scoreBoard[this.framesComplete - 2].spare === true) {
      this.wasLastFrameASpare = true
    } else {
      this.wasLastFrameASpare = false
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
