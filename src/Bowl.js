'use strict';

function Bowl () {
  this._score = 0;
  this._hitsPins = 0;
}

Bowl.prototype.roll = function (){
  this._hitsPins = Math.floor(Math.random()*11);
};

Bowl.prototype.getPins = function () {
  return this._hitsPins;
};
