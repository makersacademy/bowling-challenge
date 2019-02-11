'use strict';

function Game() {
  this.frameResults = [];
}

Game.prototype.recordFrame = function(score) {
  this.frameResults.push(score);
};

Game.prototype.finalScore = function() {
  return this.frameResults.reduce((a,b) => a + b, 0)
};
