'use strict';

function Bowling(){
  this.pointsPerRoll = []

}

Bowling.prototype.getPointsPerRoll = function(){
  return this.pointsPerRoll;
};


Bowling.prototype.roll = function(pins){
  this.pointsPerRoll.push(pins);

};
