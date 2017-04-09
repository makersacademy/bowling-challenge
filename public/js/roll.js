'use strict';

function Roll(numUprightPins){

  var knockEmDown = function(numPins){
    return Math.round(Math.random() * numPins);
  }

  this.felledPins = knockEmDown(numUprightPins);
  this.standingPins = numUprightPins - this.felledPins;
};

Roll.prototype.numStandingPins = function(){
  return this.pins;
};

Roll.prototype.numFelledPins = function(){
  return this.felledPins;
};

Roll.prototype.isStrike = function(){
  return this.felledPins == 10;
};

Roll.createInstance = function(previousRoll){
  return new Roll(previousRoll);
};
