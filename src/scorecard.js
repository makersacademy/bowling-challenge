'use strict';

function Scorecard(frameFunction, bonusBallFunction){
    this.bowlingFrames = []
    this.lastFrameStrike = false;
    this.lastFrameSpare = false;
    this.score = 0;
    this.finalScore = 0;
    this.currentFrame = 0;
    this.frameFunction = frameFunction
    this.bonusBallFunction = bonusBallFunction
  }

  Scorecard.prototype.newFrame = function(pinsBallOne, pinsBallTwo){
    this.currentFrame = new this.frameFunction(pinsBallOne, pinsBallTwo)
  };


  Scorecard.prototype.recordThrow = function(pinsBallOne, pinsBallTwo){
    this.newFrame(pinsBallOne, pinsBallTwo)
    this.calculateScore(pinsBallOne, pinsBallTwo)
  };

  Scorecard.prototype.calculateScore = function(pinsBallOne, pinsBallTwo){
    this.checkBonusPoints(pinsBallOne, pinsBallTwo)
    this.score += (pinsBallOne + pinsBallTwo);
    this.bowlingFrames.push(this.currentFrame);
    this.bonusDataForNextFrame();
    this.endFrame();
  };

  Scorecard.prototype.checkBonusPoints = function(pinsBallOne, pinsBallTwo){
    if (this.lastFrameStrike) {
      this.score += pinsBallOne + pinsBallTwo
      this.lastFrameStrike = false
    }
    if (this.lastFrameSpare) {
      this.score += pinsBallOne
      this.lastFrameSpare = false
    }
  };

  Scorecard.prototype.bonusDataForNextFrame = function(){
    if (this.currentFrame.strike) {
      this.lastFrameStrike = true;
      this.currentFrame.strike = false;
    }
    if (this.currentFrame.spare) {
      this.lastFrameSpare = true;
      this.currentFrame.spare = false;
    }
  };

  Scorecard.prototype.scoreBonusBall = function(pinsbonusBall){
    if ((pinsbonusBall !== 10) || (this.lastBall)) {
      this.score += pinsbonusBall
      this.bowlingFrames[9].scoreBonusBall = pinsbonusBall;
    } else {
      this.bowlingFrames[9].scoreBallTwo = 10;
      this.lastBall = true
      this.score += pinsbonusBall
    }
  };

  Scorecard.prototype.rollBonusBall = function(pinsbonusBall){
    if ((pinsbonusBall) > 10 || (pinsbonusBall < 0)) {
      throw new Error("Errrm, no. I think you might want to check those figures again...");
    }
    else {
      this.scoreBonusBall(pinsbonusBall);
    }
  }


   Scorecard.prototype.endFrame = function(){
    if (this.frameCount.length === 10) {
      this.checkBonusBall();
      this.endGame();
    }
   }

   Scorecard.prototype.endGame = function(){
      if (this.score === 0){
        this.score += 20
      }
      this.finalScore = this.score;
   };

   Scorecard.prototype.checkBonusBall = function(){
     if ((this.lastFrameStrike) || (this.lastFrameSpare)){
       this.rollBonusBall();
     }
   };
