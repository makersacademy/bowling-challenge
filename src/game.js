'use strict'

var Game = function(){
  this.score = 0;
  this.frameCount = 0;
}

Game.prototype.addFrame = function(){
  var frame = new Frame();
  return this.frameCount += 1;
};
