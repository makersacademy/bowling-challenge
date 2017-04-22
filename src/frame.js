// responsible for the scoring for a single frame
'use strict';

var Frame = function(){
  this.pins = 10;
  this.firstBowlRemainder = 0;
  this.totalScore = 0;
  this.status = '';
};

Frame.prototype.pinsDown = function(max) {
  return Math.round(Math.random() * max);
};

Frame.prototype.firstBowl = function(){
  var result = this.pinsDown(this.pins);
  this.firstBowlRemainder = 10 - result;
  this.totalScore = result;
  if (this.totalScore === 10) {
    this.status = 'X';
    return 'X';
  } else {
    return result;
  }
};

Frame.prototype.secondBowl = function(){
  var result = this.pinsDown(this.firstBowlRemainder);
  this.totalScore += result;
    if (this.totalScore === 10) {
    this.status = '/';
    return '/';
  } else {
    return result;
  }
};

Frame.prototype.frameScore = function(){
  return this.totalScore;
};

Frame.prototype.extraBowl = function(){
  return this.pinsDown(10);
};
