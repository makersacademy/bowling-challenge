'use strict';

var Frame = function(){
  this.pins = 10;
};

Frame.prototype.pinsDown = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

Frame.prototype.firstBowl = function(){
  return this.pinsDown(0, this.pins)
};
