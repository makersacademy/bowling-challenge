'use strict';

function Frame() {

  this.DEFAULT_FRAME_SCORE = 0;
  this.frameScore = this.DEFAULT_FRAME_SCORE;
  this.DEFAULT_PIN_COUNT = 10;
  this.pinCount = this.DEFAULT_PIN_COUNT;
  this.rollCounter = 0;
}

  Frame.prototype.countRolls = function() {
    return this.rollCounter;
  };

  Frame.prototype.addRoll = function() {
    this.rollCounter ++ ;
    return this.countRolls;
  };

   Frame.prototype.getFrameScore = function() {
     return this.frameScore;
   };

   Frame.prototype.getPinCount = function() {
     return this.pinCount;
   };

   Frame.prototype.roll = function(numberOfPins) {
     this.frameScore += numberOfPins;
     this.pinCount -= numberOfPins;
     this.addRoll();
   };
