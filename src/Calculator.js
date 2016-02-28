'use strict';

function Game() {
  this.frames = [];
};

Game.prototype.addFrame = function(rollOne, rollTwo){
  if (this.frames.length >= 10) throw new TypeError("Can't add over ten frames");
  this.frames.push([rollOne, rollTwo]);
}

Game.prototype.score = function(){
  return this.frames.map(this.frameScore.bind(this)).reduce(sum, 0);
}

Game.prototype.hasNextFrame = function(frameNum) {
  return this.frames[frameNum + 1] ? true : false;
}

Game.prototype.isSpecial = function(frame) {
  return frame.reduce(sum) === 10 ? true : false;
}

Game.prototype.frameScore = function(frame, frameNum, frames) {
  if(this.hasNextFrame(frameNum) && this.isSpecial(frame)){ return frame.reduce(sum) + rollOne(frame);}
  return frame.reduce(sum);
}

var sum = function(prev, curr) {return prev + curr;}

var rollOne = function(frame) {return frame[0];}

// Game.prototype.isTenthFrame = function() {
// }
