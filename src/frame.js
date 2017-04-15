// responsible for the scoring for a single frame
'use strict';

var Frame = function(){
  this.pins = 10;
  this.firstBowlRemainder = 0;
  this.totalScore = 0;
};

Frame.prototype.pinsDown = function(max) {
  return Math.round(Math.random() * max);
};

Frame.prototype.firstBowl = function(){
  var result = this.pinsDown(this.pins)
  this.firstBowlRemainder = 10 - result
  this.totalScore = result
  if (this.totalScore === 10) {
    return "Strike!"
  } else if (this.totalScore === 0) {
    return "Gutterball!"
  } else {
    return result
  }
};

Frame.prototype.secondBowl = function(){
  var result = this.pinsDown(this.firstBowlRemainder)
  this.totalScore += result
  if (result === 0) {
    return 'Gutterball!'
  } else if (this.totalScore === 10) {
    return 'Spare!'
  } else {
    return result
  }
};

Frame.prototype.frameScore = function(){
  return this.totalScore
};
