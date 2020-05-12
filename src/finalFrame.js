'use strict';

function FinalFrame(firstroll, secondroll, thirdroll){
  this.firstroll = firstroll
  this.secondroll = secondroll
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

  if (this.firstroll === 'X' || this.firstroll === 'x') {
    this.firstroll = 10
  }
  if (this.secondroll === 'X' || this.secondroll === 'x') {
    this.secondroll = 10
  }
  if (this.thirdroll === 'X' || this.thirdroll === 'x') {
    this.thirdroll = 10
  }
  if (this.secondroll === '/') {
    this.secondroll = (10 - this.firstroll)
  }
  if (this.thirdroll === '/' && this.firstroll === 10) {
    this.thirdroll = (10 - this.secondroll);
  } else  if (this.thirdroll === '/' && this.secondroll != 10){
    throw "Spare not valid"
  }

  if (isNaN(this.firstroll)) {
    this.firstroll = 0
  }
  if (isNaN(this.secondroll)) {
    this.secondroll = 0
  }
  if (isNaN(this.thirdroll)) {
    this.thirdroll = 0
  }

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
