'use strict';

function Frame(firstroll, secondroll) {
  this.firstroll = firstroll
  this.secondroll = secondroll
  this.validateRolls()
  this.rolls =[firstroll, secondroll];
}

var output

Frame.prototype.validateRolls = function() {
  if (this.firstroll < 0 || this.secondroll < 0) {
    throw "No negative scores";
  }
  if (this.firstroll > 10 || this.secondroll >10) {
    throw "No scores over 10";
  }
  if ((this.firstroll + this.secondroll) >10) {
    throw "Frame scores should not exceed 10";
  }
}

Frame.prototype.getScore = function() {
  output = this.rolls[0] + this.rolls[1];
  return (output);
};

Frame.prototype.getFrameType = function() {
  if (this.getScore() != 10) {
    return('nil');
  } else {
   output = this.isSpareorStrike();
    return(output);
  }
};

Frame.prototype.isSpareorStrike = function() {
  if (this.rolls[0] === 10) {
    return('strike');
  } else {
    return('spare');
  }
};

Frame.prototype.getFirstRoll = function() {
  output = this.rolls[0];
  return(output);
};
