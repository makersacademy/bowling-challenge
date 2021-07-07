'use strict';

function Roll(){
  this.frameNumber;
  this.PINS = 0;
  this.BONUS = 0;
};

Roll.prototype.setbonus = function(bonus){
  this.BONUS = bonus;
};

Roll.prototype.setpoints = function(frameNumber, pins){
  this.PINS = this.BONUS + pins;
  this.frameNumber = frameNumber;
};
