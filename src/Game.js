'use strict';


function Game(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.frameCounter = 0;
  this.MAX_FRAMES = 10;
};

Game.prototype.getScore = function() {
  return this.score;
};
