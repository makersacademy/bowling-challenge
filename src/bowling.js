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

Game.prototype.rollNumber = function () {
  var i = 0; i ++;
  if(i % 2 == 0) {
    return 2;
  }
  return 1;
}

 Game.prototype.addFrame = function (roll1, roll2) {
   this._frame.push(roll1, roll2);
   if(roll1 == 10) {
     this._frame.push("Strikey!", "Strike!")
     return this._frame;
   }
   if((roll1 + roll2) == 10) {
     this._frame.push("Spare!");
     return this._frame;
   }
   return this._frame;
 }

 Game.prototype.gutter = function () {
   var sum = 0;
   var arr = this._frame;
   for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  if(sum == 0) {
    return "It's a gutter game!";
  }
  return ;
 }

 Game.prototype.totalScore = function () {
   var sum = 0;
   var arr = this._frame;
   // subbing out "Spare!" placeholder to put in bonus of next roll
   var x = arr.indexOf("Spare!");
   arr[x] = arr[x + 1]
   // subbing out "Strike" placeholders to put in bonuses of subsequent rolls.
   var y = arr.indexOf("Strike!");
   arr[y] = arr[y + 2]
   var z = arr.indexOf("Strikey!");
   arr[z] = arr[z + 2]
   ///
   for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
  }
  return sum;
 }
