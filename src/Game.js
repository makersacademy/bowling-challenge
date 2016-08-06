'use strict';

function Game(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
};

Game.prototype.getScore = function() {
  return this.score;
};
