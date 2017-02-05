'use strict';

function Game (){
  this.frames = [];
  this.MAXIMUM_FRAMES = 10;
};

Game.prototype.roll = function (roll1, roll2) {
  this._maxFrames()
  var frame;
  frame = new Frame(roll1, roll2);
  this.frames.push(frame);
};

Game.prototype.getRoll = function (index) {
  return this.frames[index-1];
};

Game.prototype._maxFrames = function () {
  if (this.frames.length >= this.MAXIMUM_FRAMES) throw ("Game finished")
};
