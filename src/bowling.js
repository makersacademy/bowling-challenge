'use strict';

function Game(){
  this.MINIMUM_SCORE = 0;
  this.DEFAULT_PINS = 10;
  this.pins = this.DEFAULT_PINS;
  this._frame = []
}

Game.prototype.pinNumber = function (number) {
  if (number >= this.MINIMUM_SCORE && number <= this.DEFAULT_PINS) {
  this.pins - number;
  return number;
  }
  return "Invalid role please, number of pins needs to be between 0 and 10"
}

Game.prototype.rollNumber = function (number) {
  var i = 0; i ++;
  if(i % 2 == 0) {
    return 2;
  }
  return 1;
}

 Game.prototype.addFrame = function (roll1, roll2) {
   this._frame.push(roll1, roll2);
   return this._frame;
 }
