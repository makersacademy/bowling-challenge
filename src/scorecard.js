'use strict';

function Scorecard(frame){
    this.bowlingFrames = []
    this.lastFrameStrike = false;
    this.lastFrameSpare = false;
    //this.frameCount = 0; //just call bowling frames.length
    this.score = 0;
    this.finalScore = 0;
  }

  Scorecard.prototype.newFrame = function(pinsBallOne, pinsBallTwo){
    var frame = new Frame(pinsBallOne, pinsBallTwo)
  };


  Scorecard.prototype.recordThrow = function(pinsBallOne, pinsBallTwo){
    this.newFrame(noOfPinsBallOne, noOfPinsBallTwo)
    this.calculateScore(noOfPinsBallOne, noOfPinsBallTwo)
  };

  Scorecard.prototype.calculateScore = function(pinsBallOne, pinsBallTwo){
    this.checkBonusPoints(pinsBallOne, pinsBallTwo)
    this.score += (noOfPinsBallOne + noOfPinsBallTwo);
    this.bowlingFrames.push(frame);
    if (frame.strike) {
      this.lastFrameStrike = true;
      frame.strike = false;
    }
    if (frame.spare) {
      this.lastFrameSpare = true;
      frame.spare = false;
    }
    this.endFrame();
  };

  Scorecard.prototype.checkBonusPoints = function(pinsBallOne, pinsBallTwo){
    if (this.lastFrameStrike) {
      this.score += noOfPinsBallOne + noOfPinsBallTwo
      this.lastFrameStrike = false
    }
    if (this.lastFrameSpare) {
      this.score += noOfPinsBallOne
      this.lastFrameSpare = false
    }
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
