'use strict';

function Game (){
  this.frames = [];
};

Game.prototype.roll = function (rolls) {
  var frame;
  frame = new Frame(rolls);
  this.frames.push(frame);
};

Game.prototype.getRoll = function (index) {
  return this.frames[index-1];
};
