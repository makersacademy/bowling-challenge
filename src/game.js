'use strict';

function Scorecard(){
  this.STRIKE_SCORE = 10;
  this.SPARE_SCORE = 10;
  this._currScore = 0;
  this.rolls = [];
  this.currentRoll = 0;
}



Scorecard.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};

Scorecard.prototype.score = function() {
  var currScore = 0;
  var frameNumber = 0;
  for(var frame = 0; frame < 10; frame++){
    if(this.isStrike(frameNumber)){
      currScore += 10 + this.strikeBonus(frameNumber);
      frameNumber ++;
    } else if(this.isSpare(frameNumber)){
      currScore += 10 + this.spareBonus(frameNumber);
      frameNumber += 2;
    } else {
      currScore += this.scoreInFrame(frameNumber);
      frameNumber += 2;
    }
  }
  return currScore;
};
