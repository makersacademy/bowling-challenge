"use strict";

function Frame() {
  this.rolls = [];
  this.score = 0;
  this.bonus = 0;
  this.strike = false;
  this.spare = false;
  this.firstRoll = true; // of the Frame (2)
}

Frame.prototype.points = function(roll) {
  this.score += roll;
  if (this.score === 10) {
    if (this.firstRoll) { 
      this.strike = true;
    }
    else {  
      this.spare = true;
   }
  };

  if (this.firstRoll = false) {
    return false
  }
  else {
    (this.strike || !this.firstRoll)
    {
      return true; 
    }
  }    
};

Frame.prototype.recordScore = function (pinsHit) {
  this.rolls.push(pinsHit);
  this.score += pinsHit;
};

