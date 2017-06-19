'use strict';

function BowlingGame() {
  this.score = 0;
}

BowlingGame.prototype.getCurrentScore = function() {
  return this.score;
}
