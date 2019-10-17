'use strict';

function Bowling() {
  this.score = 0;
}

Bowling.prototype.getCurrentScore = function() {
  return this.score;
}
