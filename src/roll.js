"use strict"

function Roll(knockedPin){
  this.knockedPin = knockedPin;
};

Roll.prototype.numberOfKnockedPin = function() {
  return this.knockedPin;
}
