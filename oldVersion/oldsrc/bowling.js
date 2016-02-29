'use strict';

var _SCORE_ERROR = "I think you might want to check those figures again..."
var _GAME_OVER = "You are all out of balls"
var _STRIKE = 10

function Scorecard(){
  var pinsBallOne = 0;
  var pinsBallTwo = 0;
  var pinsBonusBall = 0;
  this.bowlingFrames = []
  this.strike = false;
  this.spare = false;
  this.lastFrameStrike = false;
  this.lastFrameSpare = false;
  this.frameCount = 0;
  this.score = 0;
  this.tenthFrame = false;
  this.addbonusBall = false;
  this.finalScore = 0;
}

Scorecard.prototype.checkrollLegal = function(pins){
  if (pins > _STRIKE || pins < 0 || (isNaN(pins))) {
    throw new Error(_SCORE_ERROR);
  }
}


Scorecard.prototype.ballOne = function(newPinsBallOne){
  if (this.finalScore !== 0) {
    throw new Error(_GAME_OVER);
  }
  this.pinsBallOne = newPinsBallOne;
  this.checkrollLegal(this.pinsBallOne);
  this.checkStrike(this.pinsBallOne);
  if (this.strike) {
    this.checkBonusBall();
  }
};

  Scorecard.prototype.ballTwo = function(newPinsBallTwo){
    if ((this.pinsBallOne + newPinsBallTwo) > _STRIKE || newPinsBallTwo < 0) {
      throw new Error(_SCORE_ERROR);
    }
    this.pinsBallTwo = newPinsBallTwo
    this.checkSpare();
    this.calculateScore()
  };

  Scorecard.prototype.bonusBall = function(newPinsBonusBall){
    this.checkrollLegal(newPinsBonusBall);
    this.pinsBonusBall = newPinsBonusBall
    this.checkStrike(this.pinsBonusBall)
    if (!this.strike) {
      this.score += this.pinsBonusBall
      this.addBonusBall();
    } else {
      this.bowlingFrames[9[1]] = _STRIKE;
      this.score += pinsbonusBall;
      this.addBonusBall = true;
    }
    this.score += pinsbonusBall
  };

  Scorecard.prototype.checkStrike = function(pins){
    if (pins === _STRIKE) {
      this.strike = true;
    }
   };

   Scorecard.prototype.checkSpare = function(){
     if ((!this.strike) && (this.pinsBallOne + this.pinsBallTwo) === 10){
       this.spare = true;
     }
   };

   Scorecard.prototype.calculateScore = function(){
     this.bonusPoints();
     this.score += (this.pinsBallOne + this.pinsBallTwo);
     this.bowlingFrames.push([this.pinsBallOne, this.pinsBallTwo]);
     if (this.strike) {
       this.lastFrameStrike = true;
       this.strike = false;
     }
     if (this.spare) {
       this.lastFrameSpare = true;
       this.spare = false;
     }
     this.endFrame();
   };

   Scorecard.prototype.bonusPoints = function(){
     if (this.addBonusBall) {

     }
     else if (this.lastFrameStrike) {
       this.score += this.pinsBallOne + this.pinsBallTwo
       this.lastFrameStrike = false
     }
     else if (this.lastFrameSpare) {
       this.score += this.pinsBallOne
       this.lastFrameSpare = false
     }
   };

   Scorecard.prototype.endFrame = function(){
    this.frameCounting();
    this.checkTenthFrame();
   };

   Scorecard.prototype.checkTenthFrame = function(){
     if (this.frameCount === 9) {
       this.tenthFrame = true;
     }
   };

   Scorecard.prototype.frameCounting = function(){
     this.frameCount += 1
   };

   Scorecard.prototype.endGame = function(){
      if (this.score === 0){
        this.score += 20
      }
      this.checkBonusBall();
      if (!this.addBonusBall) {
        this.finalScore = this.score
      }
   };

   Scorecard.prototype.checkBonusBall = function(){
     if (this.tenthFrame){
       this.addBonusBall = true;
       this.calculateScore();
     } else {
       this.ballTwo(_STRIKE, 0);
     }
   };
