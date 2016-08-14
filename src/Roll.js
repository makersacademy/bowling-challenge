
'use strict';

function Roll () {
  this.hitsFromRoll = 0;
}

Roll.prototype.roll = function (){
  this.hitsFromRoll = Math.floor(Math.random()*11);
};

Roll.prototype.getHitsFromRoll = function () {
  return this.hitsFromRoll;
};
