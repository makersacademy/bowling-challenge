'use strict'

var Game = function(){
  this.score = [];
  this.frameCount = 0;
}

Game.prototype.addFrame = function(){
  var frame = new Frame();
  this.score.push(frame.getFrameResult);
  return this.frameCount ++;
};

Game.prototype.runGame = function(){
  var i = 0;
  do { this.addFrame(); i++;}
  while (i < 9);
}

Game.propotype.lastFrame = function(){
  var frame = new Frame();
  this.score.push(frame.lastFrame());
  return this.score;
}
