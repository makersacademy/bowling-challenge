'use strict';

function Roll() {
  this.pinsKnocked = 0;
  this.isSet = false;
};

Roll.prototype.setPinsKnocked = function(pinsKnocked){
  this.pinsKnocked = pinsKnocked;
  this.isSet = true;
};

Roll.prototype.getPinsKnocked = function(){
  return this.pinsKnocked;
};
