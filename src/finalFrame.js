'use strict';

function FinalFrame(firstroll, secondroll, thirdroll){
  this.firstroll = firstroll
  this.secondroll = secondroll
  if (isNaN(thirdroll)) {
    thirdroll = 0;
  }
  this.thirdroll = thirdroll
  this.validateRolls()
}

FinalFrame.prototype.getFirstRoll = function(){
  return this.firstroll;
};

FinalFrame.prototype.getSecondRoll = function(){
  return this.secondroll;
};

FinalFrame.prototype.getRawScore = function(){
  var output = this.firstroll + this.secondroll +
  this.thirdroll;
  return (output);
};
FinalFrame.prototype.validateRolls = function(){
  if (this.firstroll < 0 || this.secondroll < 0
   || this.thirdroll < 0) {
    throw "No negative scores";
  }
  if (this.firstroll > 10 || this.secondroll >10
  || this.thirdroll > 10) {
    throw "No scores over 10";
  }
  if ((this.firstroll + this.secondroll < 10) &&
  this.thirdroll > 0) {
    throw "No third roll unless there is a \
strike or spare earlier in the frame";
  }
};
