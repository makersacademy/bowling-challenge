'use strict';

function Roll(){
  this.frameNumber;
  this.points;
  this.bonus;
};

Roll.prototype.bonus = function(bonus){
  this.bonus = bonus;
};

Roll.prototype.setpoints = function(frameNumber, points){
  this.points = points;
  this.frameNumber = frameNumber;
};
