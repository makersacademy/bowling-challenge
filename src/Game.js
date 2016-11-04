'use strict';

function Game(){
  this.frames = [];
  this.score = 0;
  this.isFirstRoll = true;
};


Game.prototype.bowl = function (pins) {
  if (this.isFirstRoll === true) {
    this.calcFirstRoll(pins);
  }
  this.calcSecondRoll(pins);
};

Game.prototype.calcFirstRoll = function (pins) {
  return pins
  this.isFirstRoll = false;
};

Game.prototype.calcSecondRoll = function (pins) {
  return pins
};
