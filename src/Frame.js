'use strict';

function Frame() {

  this.DEFAULT_FRAME_SCORE = 0;
  this.frameScore = this.DEFAULT_FRAME_SCORE;
  this.DEFAULT_ROLL_SCORE = 0;
  this.rollScore = this.DEFAULT_ROLL_SCORE;
  this.DEFAULT_PIN_COUNT = 10;
  this.pinCount = this.DEFAULT_PIN_COUNT;
  this.DEFAULT_ROLLS_ALLOWED = 2;
  this.rolls = [];
  this.rollCounter = this.rolls.length;
}

  Frame.prototype.countRolls = function() {
    return this.rollCounter;
  };

  Frame.prototype.updateRollCounter = function() {
    this.rollCounter = this.rolls.length;
  };

   Frame.prototype.getPinCount = function() {
     return this.pinCount;
   };

   Frame.prototype.addRollScore = function() {
     this.rolls.push(this.rollScore);
   };

   Frame.prototype.roll = function(numberOfPins) {
     this.rollScore += numberOfPins;
     this.pinCount -= numberOfPins;
     this.addRollScore();
     this.updateRollCounter();
   };

   Frame.prototype.getRolls = function() {
       return this.rolls;
   };

   Frame.prototype.getFrameScore = function() {
     var total = this.rolls.reduce(add, 0);
       function add(a, b) {
         return a + b;
       }
     this.frameScore = total;
     return this.frameScore;
   };

   Frame.prototype.isFirstRoll = function() {
     if (this.rollCounter === 1) {
       return true;
     };
   };

   Frame.prototype.isSecondRoll = function() {
     if (this.rollCounter === 2) {
       return true;
     };
   };

   Frame.prototype.isStrike = function() {
     if ((this.isFirstRoll() === true) && (this.pinCount === 0)) {
       return true;
     };
   };

   Frame.prototype.isSpare = function() {
     if ((this.isSecondRoll() === true) && (this.pinCount === 0)) {
       return true;
     };
   };
