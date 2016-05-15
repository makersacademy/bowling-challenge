'use strict';

function Roll () {
  this._score = 0;
  this._hitsFromtRoll = 0;
}

Roll.prototype.roll = function (){
  // roooolls away the ball, hits some pins
  this._hitsFromtRoll = Math.floor(Math.random()*11);
};

Roll.prototype.getHitsFromRoll = function () {
  return this._hitsFromtRoll;
};
