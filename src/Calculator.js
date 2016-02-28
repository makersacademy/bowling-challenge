'use strict';

function Game() {
  this.frames = [];
};

Game.prototype.addFrame = function(rollOne, rollTwo){
  if (this.frames.length >= 10) throw new TypeError("Can't add over ten frames");
  this.frames.push([rollOne, rollTwo]);
}

Game.prototype.calculateScore = function(){
  return this.frames.map(frameScore).reduce(sum, 0)
}

function frameScore(frame) {
   return frame.reduce(sum);
}

var sum = function(prev, curr) {return prev + curr};