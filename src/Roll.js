'use strict';

function Roll() {
  this.pinsKnocked = 0;
  this.set = false;
};

Roll.prototype.setPinsKnocked = function(pinsKnocked){
  this.pinsKnocked = pinsKnocked;
  this.set = true;
};

Roll.prototype.getPinsKnocked = function(){
  return this.pinsKnocked;
};

Roll.prototype.isSet = function(){
  return this.set;
};

Roll.prototype.isStrike = function(){
  return (this.pinsKnocked === 10);
};
