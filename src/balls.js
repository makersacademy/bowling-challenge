'use strict';

var _PIN_ERROR = "I think you might want to check those figures again...";

function Ball(pins){
  this.checkLegal(pins);
  }

  Ball.prototype.checkLegal = function(pins){
    if (pins > 10 || pins < 0) {
      throw new Error(_PIN_ERROR);
  }

  Frame.prototype.ballTwo = function(pinsBallOne, pinsBallTwo){
    if ((pinsBallOne + pinsBallTwo) > 10 || pinsBallTwo < 0) {
      throw new Error(_PIN_ERROR);
    }
    this.pinsBallTwo = pinsBallTwo
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



});
