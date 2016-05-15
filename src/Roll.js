'use strict';

function Roll () {
  this._hitsFromtRoll = 0;
}

Roll.prototype.roll = function (){
  this._hitsFromtRoll = Math.floor(Math.random()*11);
};

Roll.prototype.getHitsFromRoll = function () {
  return this._hitsFromtRoll;
};
