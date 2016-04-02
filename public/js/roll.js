'use strict';

function Roll(previousRoll){
  var numUprightPins;
  if(previousRoll){
    numUprightPins = previousRoll.numStandingPins()
  } else {
    numUprightPins = 10;
  }

  var knockEmDown = function(numPins){
    return Math.round(Math.random() * numPins);
  }

  this.previousRoll = previousRoll;
  this.felledPins = knockEmDown(numUprightPins);
  this.pins = numUprightPins - this.felledPins;
};

Roll.prototype.numStandingPins = function(){
  return this.pins;
};

Roll.prototype.numFelledPins = function(){
  return this.felledPins;
};

Roll.prototype.isSpare = function(){
  return !!this.previousRoll && this.pins === 0;
};

Roll.prototype.isStrike = function(){
  return !this.previousRoll && this.pins === 0;
};

Roll.createInstance = function(previousRoll){
  return new Roll(previousRoll);
};
