'use strict';

function Frame(firstroll, secondroll) {
  this.firstroll = firstroll
  this.secondroll = secondroll
  this.validateRolls()
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
};

Frame.prototype.getRawScore = function() {
  output = this.firstroll + this.secondroll;
  return (output);
};

Frame.prototype.getFrameType = function() {
  if (this.getRawScore() != 10) {
    return('ordinary');
  } else {
    output = this.isSpareorStrike();
    return(output);
  }
};

Frame.prototype.isSpareorStrike = function() {
  if (this.firstroll === 10) {
    return('strike');
  } else {
    return('spare');
  }
};

Frame.prototype.getFirstRoll = function() {
  return this.firstroll;
};

Frame.prototype.getSecondRoll = function(){
  return this.secondroll;
};
