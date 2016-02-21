'use strict';

function Scorecard(){
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

  Scorecard.prototype.ballOne = function(noOfPinsBallOne){
    if (this.tenthFrame) {
      throw new Error("The game is over!");
    }
    else if (noOfPinsBallOne > 10 || noOfPinsBallOne < 0) {
      throw new Error("Errrm, no. I think you might want to check those figures again...");
    } else {
   this.checkStrike(noOfPinsBallOne);
    }

   if (this.strike) {
     this.ballTwo(noOfPinsBallOne, 0);
   }

  };

  Scorecard.prototype.ballTwo = function(noOfPinsBallOne, noOfPinsBallTwo){
    if ((noOfPinsBallOne + noOfPinsBallTwo) > 10 || noOfPinsBallTwo < 0) {
      throw new Error("Errrm, no. I think you might want to check those figures again...");
    }
    this.checkSpare(noOfPinsBallOne, noOfPinsBallTwo);
    this.calculateScore(noOfPinsBallOne, noOfPinsBallTwo)
  };

  Scorecard.prototype.bonusBall = function(noOfPinsbonusBall){
    if ((noOfPinsbonusBall) > 10 || noOfPinsbonusBall < 0) {
      throw new Error("Errrm, no. I think you might want to check those figures again...");
    }
    this.checkStrike(noOfPinsbonusBall)
    if (!this.strike) {
      this.score += noOfPinsbonusBall
      this.addBonusBall =
    } else {
      this.bowlingFrames[9[1]] = 10;
      this.score += noOfPinsbonusBall;
      this.addBonusBall = true;
    }
    this.score += noOfPinsbonusBall
  }

  Scorecard.prototype.checkStrike = function(noOfPins){
    if (noOfPins === 10) {
      this.strike = true;
    }
   };

   Scorecard.prototype.checkSpare = function(noOfPinsBallOne, noOfPinsBallTwo){
     if ((noOfPinsBallOne !== 10) && (noOfPinsBallOne + noOfPinsBallTwo) === 10){
       this.spare = true;
     }
   };

   Scorecard.prototype.calculateScore = function(noOfPinsBallOne, noOfPinsBallTwo){
     this.checkBonusPoints(noOfPinsBallOne, noOfPinsBallTwo)
     this.score += (noOfPinsBallOne + noOfPinsBallTwo);
     this.bowlingFrames.push([noOfPinsBallOne, noOfPinsBallTwo]);
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

   Scorecard.prototype.checkBonusPoints = function(noOfPinsBallOne, noOfPinsBallTwo){
     if (this.lastFrameStrike) {
       this.score += noOfPinsBallOne + noOfPinsBallTwo
       this.lastFrameStrike = false
     }
     if (this.lastFrameSpare) {
       this.score += noOfPinsBallOne
       this.lastFrameSpare = false
     }
   };

   Scorecard.prototype.endFrame = function(){
    this.frameCounting();
    if ((this.frameCount === 10) && (!this.lastFrameStrike) && (!this.lastFrameSpare) ) {
      this.endGame();
    }
   };

   Scorecard.prototype.frameCounting = function(){
     this.frameCount += 1
   };

   Scorecard.prototype.endGame = function(){
      this.tenthFrame = true;
      if (this.score === 0){
        this.score += 20
      }
      this.checkBonusBall();
      if (!this.addBonusBall) {
        this.finalScore = this.score
      }
   };

   Scorecard.prototype.checkBonusBall = function(){
     if (this.lastFrameStrike) || (this.lastFrameSpare)){
       this.addBonusBall = true;
     }
   };
