'use strict';

function Roll(previousRoll){
  var numStandingPins;
  if(previousRoll){
    console.log("Pins in previous roll: " + previousRoll.numStandingPins());

    numStandingPins = previousRoll.numStandingPins()
  } else {
    numStandingPins = 10;
  }

  var knockEmDown = function(numPins){
    console.log("knocking down: " + Math.round(Math.random() * numPins));
    return numPins - Math.round(Math.random() * numPins);
  }

  this.previousRoll = previousRoll;
  this.pins = knockEmDown(numStandingPins);
};

Roll.prototype.numStandingPins = function(){
  return this.pins;
};


Roll.prototype.isSpare = function(){
  return !!this.previousRoll && this.pins == 0;
};

Roll.prototype.isStrike = function(){
  return !this.previousRoll && this.pins == 0;
};
