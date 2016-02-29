'use strict';

function Frame(pinsBallOne, pinsBallTwo){
    this.strike = false;
    this.spare = false;
    this.scoreBallOne = pinsBallOne;
    this.scoreBallTwo = pinsBallTwo;
    this.ballOne(pinsBallOne);
    this.ballTwo(pinsBallOne, pinsBallTwo);
    this.bonusBall = 0;
  }

  Frame.prototype.ballOne = function(pinsBallOne){
    this.checkStrike(pinsBallOne);
  };

  Frame.prototype.ballTwo = function(pinsBallOne, pinsBallTwo){
    this.checkSpare(pinsBallOne, pinsBallTwo);
  };

  Frame.prototype.checkStrike = function(noPins){
    if (noPins === 10) {
      this.strike = true;
    }
  };

  Frame.prototype.checkSpare = function(pinsBallOne, pinsBallTwo){
    if ((pinsBallOne !== 10) && (pinsBallOne + pinsBallTwo) === 10){
       this.spare = true;
    }
  };
