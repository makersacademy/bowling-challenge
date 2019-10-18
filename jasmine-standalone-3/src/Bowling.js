'use strict';

function Bowling() {
  this.score = 0;
}

Bowling.prototype.getCurrentScore = function() {
  return this.score;
}

Bowling.prototype.up = function() {
  this.score += 1;
}

Bowling.prototype.down = function() {
  this.score -=1;
}
