'use strict';

function Frame() {
  this.rollOne = 0;
  this.rollTwo = 0;
  this.strike = false;
  this.spare = false;
  this.points = 0;
};

Frame.prototype.isStrike = function() {
  return this.strike === true;
};

Frame.prototype.isSpare = function() {
  return this.spare === true;
};

Frame.prototype.receiveRollOne = function(num) {
  if(num === 10) {
    this.strike = true;
    this.rollOne = num; 
    this.evaluatePoints();
    return "STRIKE";
  } else {
    this.rollOne = num; 
    return "ROLL AGAIN";
  };
};

Frame.prototype.receiveRollTwo = function(num) {
  if(num === 10 || this.rollOne + num === 10) {
    this.spare = true;
    this.rollTwo = num; 
    this.evaluatePoints();
    return "SPARE";
  } else {
    this.rollTwo = num; 
    this.evaluatePoints();
    return "NEXT GAME";
  };
};

Frame.prototype.evaluatePoints = function() {
  this.points = (this.isStrike() || this.isSpare()) ? 10 : this.rollOne + this.rollTwo;
};
