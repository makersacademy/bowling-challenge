'use strict';

function Game() {
  this.frameResults = [];
}

Game.prototype.recordFrame = function(score) {
  console.log("hello")
  console.log(this.frameResults)
  this.frameResults.push(score);
};

Game.prototype.finalScore = function() {
  return this.frameResults.reduce((a,b) => a + b, 0)
};
